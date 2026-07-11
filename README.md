<div align="center">

<!-- ANIMATED BANNER -->
<img src="assets/banner.gif" width="100%" alt="NeuroGuard FND Banner"/>

<!-- REPO BADGES -->
<p>
  <a href="https://github.com/issu321/Fake-News-Flask">
    <img src="https://img.shields.io/badge/GitHub-issu321%2FFake--News--Flask-181717?style=for-the-badge&logo=github&logoColor=white&labelColor=1e293b" alt="GitHub Repo"/>
  </a>
  <img src="https://img.shields.io/badge/Python-3.10%2B-3776AB?style=for-the-badge&logo=python&logoColor=white&labelColor=1e293b" alt="Python 3.10+"/>
  <img src="https://img.shields.io/badge/Flask-2.0%2B-000000?style=for-the-badge&logo=flask&logoColor=white&labelColor=1e293b" alt="Flask"/>
  <img src="https://img.shields.io/badge/scikit--learn-1.3%2B-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white&labelColor=1e293b" alt="scikit-learn"/>
</p>
<p>
  <img src="https://img.shields.io/badge/NLTK-NLP-154F5B?style=for-the-badge&logo=python&logoColor=white&labelColor=1e293b" alt="NLTK"/>
  <img src="https://img.shields.io/badge/SQLAlchemy-DB-D71F00?style=for-the-badge&logo=sqlite&logoColor=white&labelColor=1e293b" alt="SQLAlchemy"/>
  <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&labelColor=1e293b" alt="License"/>
  <img src="https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge&labelColor=1e293b" alt="Build"/>
  <img src="https://img.shields.io/badge/Accuracy-85%25-blueviolet?style=for-the-badge&labelColor=1e293b" alt="Accuracy"/>
  <img src="https://img.shields.io/badge/Status-Production%20Ready-success?style=for-the-badge&labelColor=1e293b" alt="Status"/>
</p>

</div>

---

## 🚀 Quick Start (Installation)

> **Get up and running in under 2 minutes!**

### Prerequisites
- Python 3.10 or higher
- pip package manager

### Step 1: Clone the Repository
```bash
git clone https://github.com/issu321/Fake-News-Flask.git
cd Fake-News-Flask
```

### Step 2: Install Dependencies
```bash
pip install -r requirements.txt
```

### Step 3: Run the Application

**Option A: Desktop App (Recommended)**
```bash
python app.py
```
Launches a **native desktop window** with the full application.

**Option B: Web Browser**
```bash
python app.py --server-only
```
Then open `http://127.0.0.1:5000/` in your browser.

---

## 📊 Project Overview

<div align="center">

| Metric | Value | Model |
|:------:|:-----:|:-----:|
| **Accuracy** | 85% | Extra Trees Classifier |
| **F1 Score** | 86.96 | Weighted Average |
| **Features** | 17 | Statistical + TF-IDF |
| **N-Grams** | 1-3 | 8000 Vectorized |

</div>

---

## 🏗️ System Architecture

<div align="center">

<img src="assets/system_architecture.gif" width="100%" alt="System Architecture"/>

</div>

```mermaid
graph TD
    A[User<br/>Web/Desktop Client] -->|HTTP Request| B[Flask Application<br/>Routes | Auth | API | Templates]
    B -->|Process| C[ML Pipeline Engine]
    C -->|Store| D[SQLite Database<br/>Users | Predictions | History]
    C -->|Result| E[Prediction Output<br/>Real/Fake + Confidence]
    B -->|Serve| A

    style A fill:#06b6d4,stroke:#0891b2,stroke-width:3px,color:#fff
    style B fill:#a855f7,stroke:#7c3aed,stroke-width:3px,color:#fff
    style C fill:#ec4899,stroke:#db2777,stroke-width:3px,color:#fff
    style D fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
    style E fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
```

---

## 🧠 Machine Learning Pipeline

<div align="center">

<img src="assets/neural_workflow.gif" width="100%" alt="Neural Workflow"/>

</div>

```mermaid
graph LR
    A[Raw News Input<br/>Headline + Body Text] --> B[Preprocessing]
    B --> C[Feature Engineering]
    C --> D[Ensemble Models]
    D --> E[Best Model<br/>Extra Trees Classifier]
    E --> F[Prediction Output<br/>Real News / Fake News]
    F -.->|Feedback Loop| A

    subgraph "Preprocessing Steps"
        B1[URL Removal] --> B2[Lowercasing]
        B2 --> B3[Punctuation Strip]
        B3 --> B4[Tokenization]
        B4 --> B5[Stopword Removal]
        B5 --> B6[Porter Stemming]
    end

    subgraph "Feature Engineering"
        C1[TF-IDF 1-3 grams<br/>8000 features] --> C2[17 Statistical Features]
        C2 --> C3[Sentiment & NLP]
    end

    subgraph "Ensemble Models"
        D1[Extra Trees 85%] --> D5[Voting]
        D2[Random Forest 85%] --> D5
        D3[Logistic Reg 70%] --> D5
        D4[SVM Linear 70%] --> D5
        D5 --> E
    end

    style A fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#fff
    style B fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style C fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style D fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style E fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
    style F fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style B1 fill:#1e293b,stroke:#06b6d4,color:#fff
    style B2 fill:#1e293b,stroke:#06b6d4,color:#fff
    style B3 fill:#1e293b,stroke:#06b6d4,color:#fff
    style B4 fill:#1e293b,stroke:#06b6d4,color:#fff
    style B5 fill:#1e293b,stroke:#06b6d4,color:#fff
    style B6 fill:#1e293b,stroke:#06b6d4,color:#fff
    style C1 fill:#1e293b,stroke:#a855f7,color:#fff
    style C2 fill:#1e293b,stroke:#a855f7,color:#fff
    style C3 fill:#1e293b,stroke:#a855f7,color:#fff
    style D1 fill:#1e293b,stroke:#ec4899,color:#fff
    style D2 fill:#1e293b,stroke:#ec4899,color:#fff
    style D3 fill:#1e293b,stroke:#ec4899,color:#fff
    style D4 fill:#1e293b,stroke:#ec4899,color:#fff
    style D5 fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
```

---

## 📈 Model Performance Comparison

<div align="center">

<img src="assets/model_comparison.gif" width="100%" alt="Model Comparison"/>

</div>

```mermaid
graph LR
    subgraph "Model Benchmarks"
        direction TB
        A1[Extra Trees] --> A2[Accuracy: 85%]
        A1 --> A3[F1 Score: 86.96]

        B1[Random Forest] --> B2[Accuracy: 85%]
        B1 --> B3[F1 Score: 84.21]

        C1[Logistic Regression] --> C2[Accuracy: 70%]
        C1 --> C3[F1 Score: 66.67]

        D1[SVM Linear] --> D2[Accuracy: 70%]
        D1 --> D3[F1 Score: 66.67]
    end

    style A1 fill:#06b6d4,stroke:#0891b2,stroke-width:3px,color:#fff
    style A2 fill:#0f172a,stroke:#06b6d4,color:#fff
    style A3 fill:#0f172a,stroke:#06b6d4,color:#fff
    style B1 fill:#a855f7,stroke:#7c3aed,stroke-width:2px,color:#fff
    style B2 fill:#0f172a,stroke:#a855f7,color:#fff
    style B3 fill:#0f172a,stroke:#a855f7,color:#fff
    style C1 fill:#ec4899,stroke:#db2777,stroke-width:2px,color:#fff
    style C2 fill:#0f172a,stroke:#ec4899,color:#fff
    style C3 fill:#0f172a,stroke:#ec4899,color:#fff
    style D1 fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#fff
    style D2 fill:#0f172a,stroke:#f59e0b,color:#fff
    style D3 fill:#0f172a,stroke:#f59e0b,color:#fff
```

---

## 🔬 Feature Engineering Breakdown

<div align="center">

<img src="assets/feature_engineering.gif" width="100%" alt="Feature Engineering"/>

</div>

```mermaid
graph TD
    subgraph "Text Statistics"
        T1[Character Count]
        T2[Word Count]
        T3[Sentence Count]
        T4[Average Word Length]
        T5[Unique Word Ratio]
    end

    subgraph "Linguistic Patterns"
        L1[Capitalization Ratio]
        L2[Punctuation Density]
        L3[Exclamation Count]
        L4[Question Mark Count]
        L5[Sentence Length Patterns]
    end

    subgraph "Sentiment & NLP"
        S1[Sentiment Polarity]
        S2[Subjectivity Score]
        S3[Sensational Word Freq]
        S4[Emotional Trigger Words]
        S5[Stopword Ratio]
    end

    subgraph "TF-IDF Vectorization"
        V1[N-Gram Range: 1-3 grams]
        V2[Max Features: 8,000]
        V3[Vectorizer: TF-IDF]
        V4[Preprocessing: Stemmed Tokens]
    end

    T1 & T2 & T3 & T4 & T5 --> FE[Feature Extraction Engine]
    L1 & L2 & L3 & L4 & L5 --> FE
    S1 & S2 & S3 & S4 & S5 --> FE
    V1 & V2 & V3 & V4 --> FE
    FE --> ML[ML Ensemble Model]

    style T1 fill:#06b6d4,stroke:#0891b2,color:#fff
    style T2 fill:#06b6d4,stroke:#0891b2,color:#fff
    style T3 fill:#06b6d4,stroke:#0891b2,color:#fff
    style T4 fill:#06b6d4,stroke:#0891b2,color:#fff
    style T5 fill:#06b6d4,stroke:#0891b2,color:#fff
    style L1 fill:#a855f7,stroke:#7c3aed,color:#fff
    style L2 fill:#a855f7,stroke:#7c3aed,color:#fff
    style L3 fill:#a855f7,stroke:#7c3aed,color:#fff
    style L4 fill:#a855f7,stroke:#7c3aed,color:#fff
    style L5 fill:#a855f7,stroke:#7c3aed,color:#fff
    style S1 fill:#ec4899,stroke:#db2777,color:#fff
    style S2 fill:#ec4899,stroke:#db2777,color:#fff
    style S3 fill:#ec4899,stroke:#db2777,color:#fff
    style S4 fill:#ec4899,stroke:#db2777,color:#fff
    style S5 fill:#ec4899,stroke:#db2777,color:#fff
    style V1 fill:#f59e0b,stroke:#d97706,color:#fff
    style V2 fill:#f59e0b,stroke:#d97706,color:#fff
    style V3 fill:#f59e0b,stroke:#d97706,color:#fff
    style V4 fill:#f59e0b,stroke:#d97706,color:#fff
    style FE fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
    style ML fill:#f59e0b,stroke:#d97706,stroke-width:3px,color:#fff
```

---

## 🧪 NLP Preprocessing Pipeline

<div align="center">

<img src="assets/nlp_pipeline.gif" width="100%" alt="NLP Pipeline"/>

</div>

```mermaid
graph TD
    A[Raw Text Input] --> B[URL Removal]
    B --> C[Lowercasing]
    C --> D[Punctuation Stripping]
    D --> E[NLTK Tokenization]
    E --> F[Stopword Removal]
    F --> G[Porter Stemming]
    G --> H[Clean Tokens]
    H --> I[TF-IDF Vectorization]
    I --> J[Feature Extraction]
    J --> K[Ensemble Prediction]

    style A fill:#06b6d4,stroke:#0891b2,color:#fff
    style B fill:#1e293b,stroke:#06b6d4,color:#fff
    style C fill:#1e293b,stroke:#06b6d4,color:#fff
    style D fill:#1e293b,stroke:#06b6d4,color:#fff
    style E fill:#1e293b,stroke:#06b6d4,color:#fff
    style F fill:#1e293b,stroke:#06b6d4,color:#fff
    style G fill:#1e293b,stroke:#06b6d4,color:#fff
    style H fill:#a855f7,stroke:#7c3aed,color:#fff
    style I fill:#a855f7,stroke:#7c3aed,color:#fff
    style J fill:#ec4899,stroke:#db2777,color:#fff
    style K fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
```

| Stage | Tool | Output |
|-------|------|--------|
| **URL Removal** | Regex | Clean text string |
| **Lowercasing** | Python `.lower()` | Normalized text |
| **Punctuation Strip** | Regex | Alphanumeric text |
| **Tokenization** | NLTK Word Tokenizer | Token list |
| **Stopword Removal** | NLTK English Stopwords | Filtered tokens |
| **Stemming** | Porter Stemmer | Root word forms |
| **Vectorization** | scikit-learn TF-IDF | Sparse matrix (8000 dim) |

---

## 🔐 Authentication System

<div align="center">

<img src="assets/auth_flow.gif" width="100%" alt="Auth Flow"/>

</div>

```mermaid
graph LR
    A[Register<br/>Username | Email | Password<br/>PBKDF2-SHA256 Hash] --> B[Login<br/>Verify Credentials<br/>Session Created]
    B --> C[Access Control<br/>Protected Routes<br/>Dashboard Only]
    C --> D[Logout<br/>Session Destroyed<br/>Cookie Cleared]
    D -.->|Redirect| A

    style A fill:#06b6d4,stroke:#0891b2,stroke-width:3px,color:#fff
    style B fill:#a855f7,stroke:#7c3aed,stroke-width:3px,color:#fff
    style C fill:#ec4899,stroke:#db2777,stroke-width:3px,color:#fff
    style D fill:#10b981,stroke:#059669,stroke-width:3px,color:#fff
```

---

## 📋 Requirements

```bash
pip install -r requirements.txt
```

| Dependency | Version | Purpose |
|------------|---------|---------|
| **Python** | 3.10+ | Core Runtime |
| **Flask** | 2.0+ | Web Framework |
| **Flask-Login** | Latest | Session Management |
| **SQLAlchemy** | Latest | ORM & Database |
| **scikit-learn** | 1.3+ | ML Models |
| **NLTK** | Latest | NLP Processing |
| **pandas** | Latest | Data Manipulation |
| **numpy** | Latest | Numerical Computing |
| **pywebview** | Latest | Desktop App Shell |

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

## 🎨 UI Features

| Feature | Description | Status |
|---------|-------------|--------|
| **Interactive Neuron Network** | HTML5 Canvas animated background | Active |
| **Glassmorphism Design** | Backdrop blur with neon glow | Active |
| **Gradient Animations** | Smooth CSS transitions | Active |
| **Neon Glow Effects** | Cyan / Purple / Pink accents | Active |
| **Scroll Reveal** | Animated page entrance | Active |
| **Animated Counters** | Statistics with count-up | Active |
| **Responsive Mobile-First** | All screen sizes | Active |
| **Dark Theme** | Optimized for readability | Active |

---

## 📡 API Endpoints

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/` | `GET` | No | Home page |
| `/features` | `GET` | No | Features page |
| `/about` | `GET` | No | About page |
| `/contact` | `GET` | No | Contact page |
| `/auth/register` | `POST` | No | Create account |
| `/auth/login` | `POST` | No | Login |
| `/auth/logout` | `GET` | Yes | Logout |
| `/dashboard/` | `GET` | Yes | Dashboard |
| `/dashboard/api/predict` | `POST` | Yes | Single text prediction |
| `/dashboard/api/predict-batch` | `POST` | Yes | CSV batch prediction |
| `/dashboard/api/stats` | `GET` | Yes | Model performance stats |
| `/api/model-stats` | `GET` | No | Public model info |

---

## 👨‍💻 Developer

<div align="center">

| | |
|:---|:---|
| **GitHub** | [@issu321](https://github.com/issu321) |
| **Repository** | [https://github.com/issu321/Fake-News-Flask](https://github.com/issu321/Fake-News-Flask) |
| **Email** | [jaafreeusman@gmail.com](mailto:jaafreeusman@gmail.com) |
| **Phone** | +91 8884294749 |

</div>

---

## 📄 License

<div align="center">

This project is for **educational and research purposes**.

</div>

---

<div align="center">

**Built with passion for truth and technology** | **NeuroGuard FND 2024**

</div>
