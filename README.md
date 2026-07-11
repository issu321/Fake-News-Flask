# 🛡️ NeuroGuard FND - Fake News Detection

**AI-Powered Misinformation Detection System**  
Built with Flask, SQLAlchemy, scikit-learn, and advanced NLP.

---

## 🚀 Quick Start

### Option 1: Desktop App (Recommended)
```bash
pip install -r requirements.txt
python app.py
```
This launches a **native desktop window** with the full application.

### Option 2: Web Browser
```bash
python app.py --server-only
```
Then open `http://127.0.0.1:5000/` in your browser.

---

## 📋 Requirements

- Python 3.10+
- pip

Install dependencies:
```bash
pip install -r requirements.txt
```

---

## 🏗️ Project Structure

```
fake_news_detector/
├── app.py                 # Main application (desktop + web)
├── run.py                 # Alternative entry point
├── config.py              # Configuration settings
├── requirements.txt       # Python dependencies
├── best_model.pkl         # Trained ML ensemble model
├── model_results.pkl      # Model benchmark results
├── news_dataset.csv       # Training dataset
├── models/
│   ├── __init__.py        # DB + LoginManager init
│   ├── user.py            # User model (SQLAlchemy)
│   └── predictor.py       # Enhanced NLP predictor
├── routes/
│   ├── __init__.py        # Blueprint registration
│   ├── main.py            # Home, Features, About, Contact
│   ├── auth.py            # Login, Register, Logout
│   └── dashboard.py       # Predict API, Batch API, Stats
├── static/
│   ├── css/style.css      # Full UI styling (2000+ lines)
│   ├── js/neurons.js      # Interactive neuron background
│   ├── js/main.js         # Scroll reveal, nav, counters
│   └── js/dashboard.js    # Dashboard interactions
├── templates/
│   ├── base.html          # Master template
│   ├── index.html         # Home page
│   ├── features.html      # Features showcase
│   ├── about.html         # About project
│   ├── contact.html       # Contact page
│   ├── login.html         # Login form
│   ├── register.html      # Registration form
│   ├── dashboard.html     # Main dashboard
│   ├── 404.html           # Not found page
│   └── 500.html           # Server error page
└── instance/
    └── users.db           # SQLite database (auto-created)
```

---

## 🧠 Machine Learning Pipeline

### Models Used
| Model | Type | Accuracy | F1 Score |
|-------|------|----------|----------|
| Extra Trees | Ensemble | 85.0% | 86.96% |
| Random Forest | Ensemble | 85.0% | 84.21% |
| Logistic Regression | Linear | 70.0% | 66.67% |
| SVM (Linear) | Linear | 70.0% | 66.67% |

**Best Model: Extra Trees Classifier**

### Feature Engineering
- **TF-IDF Vectorization** (1-3 grams, 8000 features)
- **17 Statistical Features**:
  - Character/word/sentence counts
  - Capitalization ratio
  - Punctuation density
  - Average word length
  - Unique word ratio
  - Sentiment polarity & subjectivity
  - Sensational word frequency
  - Exclamation/question counts
  - Sentence length patterns

### NLP Preprocessing
1. URL removal
2. Lowercasing
3. Punctuation stripping
4. NLTK tokenization
5. Stopword removal
6. Porter stemming

---

## 🔐 Authentication System

- **Secure Registration** with username, email, full name, password
- **PBKDF2-SHA256** password hashing with salt
- **Flask-Login** session management
- **Remember Me** functionality
- **Protected Routes** (dashboard requires login)
- **Flash Messages** for UX feedback

---

## 🎨 UI Features

- **Interactive Neuron Network** background (HTML5 Canvas)
- **Glassmorphism** design with backdrop blur
- **Gradient animations** and neon glow effects
- **Scroll reveal** animations on all pages
- **Animated counters** for statistics
- **Fully responsive** mobile-first design
- **Dark theme** optimized for readability

---

## 📡 API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/` | GET | No | Home page |
| `/features` | GET | No | Features page |
| `/about` | GET | No | About page |
| `/contact` | GET | No | Contact page |
| `/auth/register` | POST | No | Create account |
| `/auth/login` | POST | No | Login |
| `/auth/logout` | GET | Yes | Logout |
| `/dashboard/` | GET | Yes | Dashboard |
| `/dashboard/api/predict` | POST | Yes | Single text prediction |
| `/dashboard/api/predict-batch` | POST | Yes | CSV batch prediction |
| `/dashboard/api/stats` | GET | Yes | Model performance stats |
| `/api/model-stats` | GET | No | Public model info |

---

## 👨‍💻 Developer

**Mohammed Usman**
- GitHub: [@issu321](https://github.com/issu321)
- Email: [jaafreeusman@gmail.com](mailto:jaafreeusman@gmail.com)
- Phone: +91 8884294749

---

## 📄 License

This project is for educational and research purposes.

---

*Built with passion for truth and technology.* 🛡️
