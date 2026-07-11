from flask import render_template, request, jsonify, flash, redirect, url_for
from flask_login import login_required, current_user
from . import dashboard_bp
from models.predictor import FakeNewsPredictor
from config import Config
import pandas as pd
import os

predictor = FakeNewsPredictor(Config.MODEL_PATH)

@dashboard_bp.route('/')
@login_required
def index():
    return render_template('dashboard.html')

@dashboard_bp.route('/api/predict', methods=['POST'])
@login_required
def api_predict():
    data = request.get_json()
    text = data.get('text', '')

    if not text or len(text.strip()) < 20:
        return jsonify({'error': 'Please enter at least 20 characters.'}), 400

    pred, conf, meta, processed = predictor.predict(text)

    if pred is None:
        return jsonify({'error': 'Could not process text.'}), 400

    return jsonify({
        'prediction': pred,
        'confidence': round(conf, 2),
        'sentiment_polarity': meta['sentiment_polarity'],
        'sentiment_subjectivity': meta['sentiment_subjectivity'],
        'original_length': meta['original_length'],
        'processed_length': meta['processed_length'],
        'tokens': meta['tokens'],
        'top_terms': meta['top_terms'],
        'explanation': meta['explanation']
    })

@dashboard_bp.route('/api/predict-batch', methods=['POST'])
@login_required
def api_predict_batch():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded.'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected.'}), 400

    filename = file.filename.lower()
    if not (filename.endswith('.csv') or filename.endswith('.xlsx') or filename.endswith('.xls')):
        return jsonify({'error': 'Please upload a CSV or Excel (.xlsx/.xls) file.'}), 400

    try:
        if filename.endswith('.csv'):
            df = pd.read_csv(file)
        else:
            df = pd.read_excel(file)
        if 'text' not in df.columns:
            return jsonify({'error': 'File must contain a "text" column.'}), 400

        texts = df['text'].dropna().tolist()
        if len(texts) == 0:
            return jsonify({'error': 'No valid text found.'}), 400

        results = predictor.predict_batch(texts)
        fake_count = sum(1 for r in results if r['prediction'] == 'fake')
        real_count = sum(1 for r in results if r['prediction'] == 'real')
        avg_conf = sum(r['confidence'] for r in results) / len(results) if results else 0

        return jsonify({
            'total': len(results),
            'fake_count': fake_count,
            'real_count': real_count,
            'avg_confidence': round(avg_conf, 2),
            'results': results
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@dashboard_bp.route('/api/stats')
@login_required
def api_stats():
    import joblib
    try:
        results = joblib.load(Config.RESULTS_PATH)
        return jsonify({
            'models': results,
            'best_model': max(results, key=lambda x: results[x]['f1'])
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
