import joblib
import os
import pandas as pd
import numpy as np
import re
from scipy.sparse import hstack, csr_matrix

# Try to import TextBlob - if not available, use a simple fallback
try:
    from textblob import TextBlob
    HAS_TEXTBLOB = True
except ImportError:
    HAS_TEXTBLOB = False

SENSATIONAL_WORDS = {
    'shocking', 'unbelievable', 'miracle', 'secret', 'conspiracy', 'exposed', 'banned',
    'censored', 'hoax', 'scam', 'urgent', 'alert', 'revealed', 'hidden', 'leaked',
    'bombshell', 'breaking', 'allegedly', 'supposedly', 'reportedly', 'claims',
    'cover-up', 'cover up', 'whistleblower', 'inside source', 'anonymous',
    'doctors hate this', 'one weird trick', 'you wont believe', 'mind blowing',
    'terrifying', 'devastating', 'outrageous', 'sinister', 'dystopian', 'apocalyptic'
}


def preprocess_text(text):
    if pd.isna(text):
        return ""
    text = str(text).lower()
    text = re.sub(r'http\S+|www\S+|https\S+', '', text, flags=re.MULTILINE)
    text = re.sub(r'[^a-zA-Z\s]', '', text)
    return text


def get_sentiment(text):
    """Get REAL sentiment using TextBlob or fallback"""
    if HAS_TEXTBLOB:
        blob = TextBlob(str(text))
        return blob.sentiment.polarity, blob.sentiment.subjectivity
    else:
        # Simple fallback: count positive/negative words
        words = str(text).lower().split()
        positive = {'good', 'great', 'excellent', 'approved', 'success', 'positive', 'benefit', 'improve', 'growth', 'award', 'win', 'discover', 'happy', 'best', 'love', 'amazing'}
        negative = {'bad', 'terrible', 'fail', 'crisis', 'danger', 'threat', 'destroy', 'kill', 'die', 'worst', 'hate', 'evil', 'shocking', 'exposed', 'scam', 'hoax'}
        pos = sum(1 for w in words if w in positive)
        neg = sum(1 for w in words if w in negative)
        total = len(words)
        polarity = (pos - neg) / max(total, 1)
        subjectivity = (pos + neg) / max(total, 1)
        return polarity, subjectivity


class FakeNewsPredictor:
    def __init__(self, model_path):
        self.model, self.tfidf = joblib.load(model_path)
        self.sensational_words = SENSATIONAL_WORDS

    def predict(self, text):
        processed = preprocess_text(text)
        if not processed:
            return None, 0, None, None

        # TF-IDF features
        vec = self.tfidf.transform([processed])

        # Statistical features (6 features)
        text_str = str(text)
        words = text_str.lower().split()
        caps_ratio = sum(1 for c in text_str if c.isupper()) / max(len(text_str), 1)
        excl_count = text_str.count('!')
        ques_count = text_str.count('?')
        word_count = len(words)
        avg_word_len = np.mean([len(w) for w in words]) if words else 0
        sens_count = sum(1 for w in words if w in self.sensational_words)
        stats_vec = csr_matrix([[caps_ratio, excl_count, ques_count, word_count, avg_word_len, sens_count]])

        # REAL sentiment features (2 features) - NOT HARDCODED
        polarity, subjectivity = get_sentiment(text)
        sentiment_vec = csr_matrix([[polarity, subjectivity]])

        # Combine ALL features
        combined = hstack([vec, stats_vec, sentiment_vec])

        pred = self.model.predict(combined)[0]
        proba = self.model.predict_proba(combined)[0]
        confidence = float(max(proba) * 100)

        # Top TF-IDF terms
        feature_names = self.tfidf.get_feature_names_out()
        scores = vec.toarray()[0]
        top_idx = scores.argsort()[-10:][::-1]
        top_terms = [(feature_names[i], float(scores[i])) for i in top_idx if scores[i] > 0]

        explanation = self.generate_explanation(text, pred, confidence, polarity)

        return pred, confidence, {
            'sentiment_polarity': round(polarity, 3),
            'sentiment_subjectivity': round(subjectivity, 3),
            'original_length': len(text_str),
            'processed_length': len(processed),
            'tokens': len(processed.split()),
            'top_terms': top_terms[:5],
            'explanation': explanation
        }, processed

    def predict_batch(self, texts):
        results = []
        for text in texts:
            pred, conf, meta, _ = self.predict(text)
            results.append({
                'text': text,
                'prediction': pred,
                'confidence': conf,
                'sentiment_polarity': meta['sentiment_polarity'] if meta else 0,
                'sentiment_subjectivity': meta['sentiment_subjectivity'] if meta else 0
            })
        return results

    def generate_explanation(self, text, prediction, confidence, polarity):
        reasons = []
        words = str(text).lower().split()

        sens_count = sum(1 for w in words if w in self.sensational_words)
        if sens_count >= 2:
            reasons.append(f"sensationalist language ({sens_count} trigger words)")
        elif sens_count == 1:
            reasons.append("sensationalist phrasing detected")

        if abs(polarity) > 0.3:
            reasons.append("strong emotional sentiment")
        elif abs(polarity) > 0.1:
            reasons.append("notable emotional tone")

        caps_ratio = sum(1 for c in str(text) if c.isupper()) / max(len(str(text)), 1)
        if caps_ratio > 0.15:
            reasons.append("excessive capitalization")

        if str(text).count('!') > 2:
            reasons.append("multiple exclamation marks")

        if prediction == 'fake':
            base = "This article exhibits linguistic patterns commonly associated with misinformation"
        else:
            base = "This article demonstrates credible journalistic characteristics"

        if reasons:
            return f"{base}: {', '.join(reasons)}. Model confidence: {confidence:.1f}%."
        else:
            return f"{base}. Model confidence: {confidence:.1f}%."
