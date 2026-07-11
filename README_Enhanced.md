<div align="center">

<!-- ANIMATED NEURAL NETWORK BANNER -->
<svg width="100%" height="300" viewBox="0 0 1200 300" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0f172a;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#1e1b4b;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#312e81;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="neonCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#22d3ee;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="neonPurple" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#a855f7;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#c084fc;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="neonPink" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#ec4899;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#f472b6;stop-opacity:1" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <filter id="strongGlow">
      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="1200" height="300" fill="url(#bgGrad)" rx="20"/>

  <g opacity="0.1">
    <line x1="0" y1="50" x2="1200" y2="50" stroke="#06b6d4" stroke-width="1">
      <animate attributeName="x1" from="-200" to="1200" dur="8s" repeatCount="indefinite"/>
      <animate attributeName="x2" from="0" to="1400" dur="8s" repeatCount="indefinite"/>
    </line>
    <line x1="0" y1="150" x2="1200" y2="150" stroke="#a855f7" stroke-width="1">
      <animate attributeName="x1" from="-200" to="1200" dur="12s" repeatCount="indefinite"/>
      <animate attributeName="x2" from="0" to="1400" dur="12s" repeatCount="indefinite"/>
    </line>
    <line x1="0" y1="250" x2="1200" y2="250" stroke="#ec4899" stroke-width="1">
      <animate attributeName="x1" from="-200" to="1200" dur="10s" repeatCount="indefinite"/>
      <animate attributeName="x2" from="0" to="1400" dur="10s" repeatCount="indefinite"/>
    </line>
  </g>

  <g filter="url(#glow)">
    <circle cx="150" cy="80" r="8" fill="url(#neonCyan)">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="150" cy="150" r="10" fill="url(#neonCyan)">
      <animate attributeName="opacity" values="1;0.4;1" dur="3s" repeatCount="indefinite"/>
    </circle>
    <circle cx="150" cy="220" r="8" fill="url(#neonCyan)">
      <animate attributeName="opacity" values="0.4;1;0.4" dur="2.5s" repeatCount="indefinite"/>
    </circle>
  </g>

  <g filter="url(#glow)">
    <circle cx="350" cy="60" r="8" fill="url(#neonPurple)">
      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="130" r="10" fill="url(#neonPurple)">
      <animate attributeName="opacity" values="1;0.5;1" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="200" r="8" fill="url(#neonPurple)">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="350" cy="270" r="6" fill="url(#neonPurple)">
      <animate attributeName="opacity" values="0.4;0.9;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
  </g>

  <g filter="url(#glow)">
    <circle cx="550" cy="100" r="10" fill="url(#neonPink)">
      <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="550" cy="180" r="8" fill="url(#neonPink)">
      <animate attributeName="opacity" values="1;0.4;1" dur="2.5s" repeatCount="indefinite"/>
    </circle>
    <circle cx="550" cy="240" r="6" fill="url(#neonPink)">
      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
    </circle>
  </g>

  <g stroke="url(#neonCyan)" stroke-width="1.5" opacity="0.4" fill="none">
    <line x1="150" y1="80" x2="350" y2="60">
      <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="80" x2="350" y2="130">
      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="150" x2="350" y2="60">
      <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="150" x2="350" y2="130">
      <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="150" x2="350" y2="200">
      <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="220" x2="350" y2="130">
      <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="2.2s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="220" x2="350" y2="200">
      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
    </line>
    <line x1="150" y1="220" x2="350" y2="270">
      <animate attributeName="stroke-opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite"/>
    </line>
  </g>

  <g stroke="url(#neonPurple)" stroke-width="1.5" opacity="0.4" fill="none">
    <line x1="350" y1="60" x2="550" y2="100">
      <animate attributeName="stroke-opacity" values="0.2;0.6;0.2" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="350" y1="130" x2="550" y2="100">
      <animate attributeName="stroke-opacity" values="0.3;0.7;0.3" dur="2.5s" repeatCount="indefinite"/>
    </line>
    <line x1="350" y1="130" x2="550" y2="180">
      <animate attributeName="stroke-opacity" values="0.4;0.8;0.4" dur="2s" repeatCount="indefinite"/>
    </line>
    <line x1="350" y1="200" x2="550" y2="180">
      <animate attributeName="stroke-opacity" values="0.2;0.5;0.2" dur="3s" repeatCount="indefinite"/>
    </line>
    <line x1="350" y1="200" x2="550" y2="240">
      <animate attributeName="stroke-opacity" values="0.3;0.6;0.3" dur="2.8s" repeatCount="indefinite"/>
    </line>
    <line x1="350" y1="270" x2="550" y2="240">
      <animate attributeName="stroke-opacity" values="0.2;0.4;0.2" dur="2.2s" repeatCount="indefinite"/>
    </line>
  </g>

  <text x="750" y="120" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="url(#neonCyan)" filter="url(#strongGlow)" text-anchor="middle">
    NeuroGuard FND
  </text>
  <text x="750" y="170" font-family="Arial, sans-serif" font-size="22" fill="#e2e8f0" text-anchor="middle" opacity="0.9">
    AI-Powered Misinformation Detection System
  </text>
  <text x="750" y="200" font-family="Arial, sans-serif" font-size="14" fill="#94a3b8" text-anchor="middle">
    Advanced NLP | Ensemble ML | Real-time Analysis
  </text>

  <circle cx="750" cy="145" r="120" fill="none" stroke="url(#neonCyan)" stroke-width="2" opacity="0">
    <animate attributeName="r" values="100;140" dur="2s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0" dur="2s" repeatCount="indefinite"/>
  </circle>
  <circle cx="750" cy="145" r="120" fill="none" stroke="url(#neonPurple)" stroke-width="2" opacity="0">
    <animate attributeName="r" values="100;140" dur="2s" begin="1s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0" dur="2s" begin="1s" repeatCount="indefinite"/>
  </circle>
</svg>

<!-- BADGES ROW -->
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

<svg width="100%" height="120" viewBox="0 0 900 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="card1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#0891b2"/>
    </linearGradient>
    <linearGradient id="card2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
    <linearGradient id="card3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899"/>
      <stop offset="100%" style="stop-color:#db2777"/>
    </linearGradient>
    <linearGradient id="card4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#d97706"/>
    </linearGradient>
    <filter id="shadow">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect x="10" y="10" width="210" height="100" rx="16" fill="url(#card1)" filter="url(#shadow)" opacity="0.9"/>
  <text x="115" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle" opacity="0.8">MODEL ACCURACY</text>
  <text x="115" y="80" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">85%</text>
  <text x="115" y="95" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.7">Extra Trees Classifier</text>

  <rect x="240" y="10" width="210" height="100" rx="16" fill="url(#card2)" filter="url(#shadow)" opacity="0.9"/>
  <text x="345" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle" opacity="0.8">F1 SCORE</text>
  <text x="345" y="80" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">86.96</text>
  <text x="345" y="95" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.7">Weighted Average</text>

  <rect x="470" y="10" width="210" height="100" rx="16" fill="url(#card3)" filter="url(#shadow)" opacity="0.9"/>
  <text x="575" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle" opacity="0.8">FEATURES</text>
  <text x="575" y="80" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">17</text>
  <text x="575" y="95" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.7">Statistical + TF-IDF</text>

  <rect x="700" y="10" width="190" height="100" rx="16" fill="url(#card4)" filter="url(#shadow)" opacity="0.9"/>
  <text x="795" y="45" font-family="Arial" font-size="12" fill="white" text-anchor="middle" opacity="0.8">N-GRAMS</text>
  <text x="795" y="80" font-family="Arial" font-size="36" font-weight="bold" fill="white" text-anchor="middle">1-3</text>
  <text x="795" y="95" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.7">8000 Vectorized</text>
</svg>

</div>

---

## 🏗️ System Architecture

<div align="center">

<svg width="100%" height="500" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="userGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#0891b2"/>
    </linearGradient>
    <linearGradient id="flaskGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
    <linearGradient id="mlGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899"/>
      <stop offset="100%" style="stop-color:#db2777"/>
    </linearGradient>
    <linearGradient id="dbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#d97706"/>
    </linearGradient>
    <linearGradient id="outGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#059669"/>
    </linearGradient>
    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#64748b"/>
    </marker>
  </defs>

  <text x="500" y="30" font-family="Arial" font-size="18" font-weight="bold" fill="#e2e8f0" text-anchor="middle">System Architecture Flow</text>

  <rect x="400" y="50" width="200" height="60" rx="12" fill="url(#userGrad)" opacity="0.9"/>
  <text x="500" y="75" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">User</text>
  <text x="500" y="95" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.8">Web / Desktop Client</text>

  <line x1="500" y1="110" x2="500" y2="140" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="300" y="150" width="400" height="80" rx="12" fill="url(#flaskGrad)" opacity="0.9"/>
  <text x="500" y="180" font-family="Arial" font-size="16" font-weight="bold" fill="white" text-anchor="middle">Flask Application</text>
  <text x="500" y="200" font-family="Arial" font-size="11" fill="white" text-anchor="middle" opacity="0.8">Routes | Auth | API | Templates</text>
  <text x="500" y="215" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.7">Desktop (PyWebView) + Server Mode</text>

  <line x1="500" y1="230" x2="500" y2="260" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="250" y="270" width="500" height="100" rx="12" fill="url(#mlGrad)" opacity="0.9"/>
  <text x="500" y="295" font-family="Arial" font-size="16" font-weight="bold" fill="white" text-anchor="middle">ML Pipeline Engine</text>

  <rect x="270" y="310" width="140" height="45" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="340" y="330" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Preprocessing</text>
  <text x="340" y="345" font-family="Arial" font-size="9" fill="#c084fc" text-anchor="middle">Tokenize | Stem | Clean</text>

  <rect x="430" y="310" width="140" height="45" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="500" y="330" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Feature Extraction</text>
  <text x="500" y="345" font-family="Arial" font-size="9" fill="#c084fc" text-anchor="middle">TF-IDF | Stats | NLP</text>

  <rect x="590" y="310" width="140" height="45" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="660" y="330" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Ensemble Model</text>
  <text x="660" y="345" font-family="Arial" font-size="9" fill="#c084fc" text-anchor="middle">Extra Trees | RF | LR</text>

  <line x1="500" y1="370" x2="500" y2="400" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="350" y="410" width="300" height="60" rx="12" fill="url(#dbGrad)" opacity="0.9"/>
  <text x="500" y="435" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">SQLite Database</text>
  <text x="500" y="455" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.8">Users | Predictions | History</text>

  <line x1="800" y1="320" x2="850" y2="320" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="860" y="270" width="120" height="100" rx="12" fill="url(#outGrad)" opacity="0.9"/>
  <text x="920" y="300" font-family="Arial" font-size="12" font-weight="bold" fill="white" text-anchor="middle">Result</text>
  <text x="920" y="320" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Real / Fake</text>
  <text x="920" y="340" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Confidence %</text>
  <text x="920" y="355" font-family="Arial" font-size="9" fill="white" text-anchor="middle" opacity="0.7">Visualization</text>
</svg>

</div>

---

## 🧠 Machine Learning Pipeline

<div align="center">

<svg width="100%" height="420" viewBox="0 0 1100 420" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="inputGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#0891b2"/>
    </linearGradient>
    <linearGradient id="processGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
    <linearGradient id="modelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899"/>
      <stop offset="100%" style="stop-color:#db2777"/>
    </linearGradient>
    <linearGradient id="resultGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#10b981"/>
      <stop offset="100%" style="stop-color:#059669"/>
    </linearGradient>
    <filter id="boxShadow">
      <feDropShadow dx="0" dy="3" stdDeviation="5" flood-opacity="0.25"/>
    </filter>
    <marker id="arr" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L9,3 z" fill="#94a3b8"/>
    </marker>
  </defs>

  <text x="550" y="30" font-family="Arial" font-size="20" font-weight="bold" fill="#e2e8f0" text-anchor="middle">Neural Workflow & Processing Pipeline</text>

  <rect x="50" y="80" width="160" height="70" rx="12" fill="url(#inputGrad)" filter="url(#boxShadow)"/>
  <text x="130" y="105" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Raw News Input</text>
  <text x="130" y="125" font-family="Arial" font-size="10" fill="white" text-anchor="middle" opacity="0.8">Headline + Body Text</text>
  <text x="130" y="140" font-family="Arial" font-size="9" fill="#cffafe" text-anchor="middle">String / CSV Batch</text>

  <line x1="210" y1="115" x2="260" y2="115" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="270" y="60" width="180" height="110" rx="12" fill="url(#processGrad)" filter="url(#boxShadow)"/>
  <text x="360" y="85" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Preprocessing</text>
  <text x="360" y="105" font-family="Arial" font-size="10" fill="white" text-anchor="middle">1. URL Removal</text>
  <text x="360" y="120" font-family="Arial" font-size="10" fill="white" text-anchor="middle">2. Lowercasing + Punctuation</text>
  <text x="360" y="135" font-family="Arial" font-size="10" fill="white" text-anchor="middle">3. Tokenization & Stopwords</text>
  <text x="360" y="150" font-family="Arial" font-size="10" fill="white" text-anchor="middle">4. Porter Stemming</text>

  <line x1="450" y1="115" x2="500" y2="115" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="510" y="60" width="180" height="110" rx="12" fill="url(#processGrad)" filter="url(#boxShadow)"/>
  <text x="600" y="85" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Feature Engineering</text>
  <text x="600" y="105" font-family="Arial" font-size="10" fill="white" text-anchor="middle">TF-IDF (1-3 grams, 8k feat)</text>
  <text x="600" y="120" font-family="Arial" font-size="10" fill="white" text-anchor="middle">17 Statistical Features</text>
  <text x="600" y="135" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Sentiment & Sensation</text>
  <text x="600" y="150" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Punctuation Density</text>

  <line x1="690" y1="115" x2="740" y2="115" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="750" y="60" width="180" height="110" rx="12" fill="url(#modelGrad)" filter="url(#boxShadow)"/>
  <text x="840" y="85" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Ensemble Models</text>
  <text x="840" y="105" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Extra Trees (85%)</text>
  <text x="840" y="120" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Random Forest (85%)</text>
  <text x="840" y="135" font-family="Arial" font-size="10" fill="white" text-anchor="middle">Logistic Regression (70%)</text>
  <text x="840" y="150" font-family="Arial" font-size="10" fill="white" text-anchor="middle">SVM Linear (70%)</text>

  <line x1="840" y1="170" x2="840" y2="220" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="750" y="230" width="180" height="60" rx="12" fill="#1e1b4b" stroke="#ec4899" stroke-width="2" filter="url(#boxShadow)"/>
  <text x="840" y="255" font-family="Arial" font-size="14" font-weight="bold" fill="#f472b6" text-anchor="middle">Best Model</text>
  <text x="840" y="275" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Extra Trees Classifier</text>

  <line x1="750" y1="260" x2="550" y2="260" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="330" y="230" width="200" height="60" rx="12" fill="url(#resultGrad)" filter="url(#boxShadow)"/>
  <text x="430" y="255" font-family="Arial" font-size="14" font-weight="bold" fill="white" text-anchor="middle">Prediction Output</text>
  <text x="430" y="275" font-family="Arial" font-size="11" fill="white" text-anchor="middle">Real News / Fake News</text>

  <line x1="430" y1="230" x2="430" y2="200" stroke="#94a3b8" stroke-width="2" marker-end="url(#arr)"/>

  <path d="M 430 200 Q 200 200 200 115 Q 200 30 550 30" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="5,5" marker-end="url(#arr)"/>
  <text x="300" y="25" font-family="Arial" font-size="10" fill="#fbbf24" text-anchor="middle">Continuous Learning Loop</text>

  <rect x="50" y="340" width="1000" height="60" rx="10" fill="#0f172a" opacity="0.6"/>
  <text x="550" y="365" font-family="Arial" font-size="11" fill="#94a3b8" text-anchor="middle">The pipeline processes raw text through 4 NLP stages, extracts 17+ statistical features with TF-IDF vectorization,</text>
  <text x="550" y="385" font-family="Arial" font-size="11" fill="#94a3b8" text-anchor="middle">and feeds into an ensemble of 4 ML models with Extra Trees as the primary classifier for optimal accuracy.</text>
</svg>

</div>

---

## 📈 Model Performance Comparison

<div align="center">

<svg width="100%" height="350" viewBox="0 0 900 350" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bar1" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#0891b2"/>
    </linearGradient>
    <linearGradient id="bar2" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
    <linearGradient id="bar3" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899"/>
      <stop offset="100%" style="stop-color:#db2777"/>
    </linearGradient>
    <linearGradient id="bar4" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#d97706"/>
    </linearGradient>
    <filter id="glowBar">
      <feGaussianBlur stdDeviation="2" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <rect width="900" height="350" fill="#0f172a" rx="16"/>

  <text x="450" y="30" font-family="Arial" font-size="18" font-weight="bold" fill="#e2e8f0" text-anchor="middle">Model Accuracy & F1 Score Comparison</text>

  <line x1="80" y1="60" x2="80" y2="280" stroke="#334155" stroke-width="1"/>
  <line x1="80" y1="280" x2="850" y2="280" stroke="#334155" stroke-width="1"/>
  <line x1="80" y1="60" x2="850" y2="60" stroke="#334155" stroke-width="0.5" opacity="0.3"/>
  <line x1="80" y1="115" x2="850" y2="115" stroke="#334155" stroke-width="0.5" opacity="0.3"/>
  <line x1="80" y1="170" x2="850" y2="170" stroke="#334155" stroke-width="0.5" opacity="0.3"/>
  <line x1="80" y1="225" x2="850" y2="225" stroke="#334155" stroke-width="0.5" opacity="0.3"/>

  <text x="70" y="65" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="end">100%</text>
  <text x="70" y="120" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="end">75%</text>
  <text x="70" y="175" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="end">50%</text>
  <text x="70" y="230" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="end">25%</text>
  <text x="70" y="285" font-family="Arial" font-size="10" fill="#94a3b8" text-anchor="end">0%</text>

  <rect x="120" y="115" width="60" height="165" rx="6" fill="url(#bar1)" filter="url(#glowBar)" opacity="0.9">
    <animate attributeName="height" from="0" to="165" dur="1s" fill="freeze"/>
    <animate attributeName="y" from="280" to="115" dur="1s" fill="freeze"/>
  </rect>
  <rect x="190" y="108" width="60" height="172" rx="6" fill="url(#bar1)" opacity="0.5">
    <animate attributeName="height" from="0" to="172" dur="1.2s" fill="freeze"/>
    <animate attributeName="y" from="280" to="108" dur="1.2s" fill="freeze"/>
  </rect>
  <text x="155" y="310" font-family="Arial" font-size="10" fill="#06b6d4" text-anchor="middle" font-weight="bold">Extra Trees</text>
  <text x="155" y="325" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">Acc: 85% | F1: 86.96</text>

  <rect x="300" y="115" width="60" height="165" rx="6" fill="url(#bar2)" filter="url(#glowBar)" opacity="0.9">
    <animate attributeName="height" from="0" to="165" dur="1s" begin="0.2s" fill="freeze"/>
    <animate attributeName="y" from="280" to="115" dur="1s" begin="0.2s" fill="freeze"/>
  </rect>
  <rect x="370" y="130" width="60" height="150" rx="6" fill="url(#bar2)" opacity="0.5">
    <animate attributeName="height" from="0" to="150" dur="1.2s" begin="0.2s" fill="freeze"/>
    <animate attributeName="y" from="280" to="130" dur="1.2s" begin="0.2s" fill="freeze"/>
  </rect>
  <text x="335" y="310" font-family="Arial" font-size="10" fill="#a855f7" text-anchor="middle" font-weight="bold">Random Forest</text>
  <text x="335" y="325" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">Acc: 85% | F1: 84.21</text>

  <rect x="480" y="170" width="60" height="110" rx="6" fill="url(#bar3)" filter="url(#glowBar)" opacity="0.9">
    <animate attributeName="height" from="0" to="110" dur="1s" begin="0.4s" fill="freeze"/>
    <animate attributeName="y" from="280" to="170" dur="1s" begin="0.4s" fill="freeze"/>
  </rect>
  <rect x="550" y="170" width="60" height="110" rx="6" fill="url(#bar3)" opacity="0.5">
    <animate attributeName="height" from="0" to="110" dur="1.2s" begin="0.4s" fill="freeze"/>
    <animate attributeName="y" from="280" to="170" dur="1.2s" begin="0.4s" fill="freeze"/>
  </rect>
  <text x="515" y="310" font-family="Arial" font-size="10" fill="#ec4899" text-anchor="middle" font-weight="bold">Logistic Reg</text>
  <text x="515" y="325" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">Acc: 70% | F1: 66.67</text>

  <rect x="660" y="170" width="60" height="110" rx="6" fill="url(#bar4)" filter="url(#glowBar)" opacity="0.9">
    <animate attributeName="height" from="0" to="110" dur="1s" begin="0.6s" fill="freeze"/>
    <animate attributeName="y" from="280" to="170" dur="1s" begin="0.6s" fill="freeze"/>
  </rect>
  <rect x="730" y="170" width="60" height="110" rx="6" fill="url(#bar4)" opacity="0.5">
    <animate attributeName="height" from="0" to="110" dur="1.2s" begin="0.6s" fill="freeze"/>
    <animate attributeName="y" from="280" to="170" dur="1.2s" begin="0.6s" fill="freeze"/>
  </rect>
  <text x="695" y="310" font-family="Arial" font-size="10" fill="#f59e0b" text-anchor="middle" font-weight="bold">SVM Linear</text>
  <text x="695" y="325" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">Acc: 70% | F1: 66.67</text>

  <rect x="780" y="70" width="15" height="15" rx="3" fill="url(#bar1)" opacity="0.9"/>
  <text x="805" y="82" font-family="Arial" font-size="10" fill="#94a3b8">Accuracy</text>
  <rect x="780" y="95" width="15" height="15" rx="3" fill="url(#bar1)" opacity="0.5"/>
  <text x="805" y="107" font-family="Arial" font-size="10" fill="#94a3b8">F1 Score</text>
</svg>

</div>

---

## 🔬 Feature Engineering Breakdown

<div align="center">

<svg width="100%" height="400" viewBox="0 0 900 400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="featGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#0891b2"/>
    </linearGradient>
    <linearGradient id="featGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#7c3aed"/>
    </linearGradient>
    <linearGradient id="featGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ec4899"/>
      <stop offset="100%" style="stop-color:#db2777"/>
    </linearGradient>
    <linearGradient id="featGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f59e0b"/>
      <stop offset="100%" style="stop-color:#d97706"/>
    </linearGradient>
  </defs>

  <rect width="900" height="400" fill="#0f172a" rx="16"/>
  <text x="450" y="30" font-family="Arial" font-size="18" font-weight="bold" fill="#e2e8f0" text-anchor="middle">17 Statistical Features + TF-IDF Vectorization</text>

  <rect x="30" y="60" width="260" height="150" rx="12" fill="url(#featGrad1)" opacity="0.9"/>
  <text x="160" y="85" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Text Statistics</text>
  <text x="160" y="110" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Character Count</text>
  <text x="160" y="130" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Word Count</text>
  <text x="160" y="150" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Sentence Count</text>
  <text x="160" y="170" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Average Word Length</text>
  <text x="160" y="190" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Unique Word Ratio</text>

  <rect x="310" y="60" width="260" height="150" rx="12" fill="url(#featGrad2)" opacity="0.9"/>
  <text x="440" y="85" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Linguistic Patterns</text>
  <text x="440" y="110" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Capitalization Ratio</text>
  <text x="440" y="130" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Punctuation Density</text>
  <text x="440" y="150" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Exclamation Count</text>
  <text x="440" y="170" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Question Mark Count</text>
  <text x="440" y="190" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Sentence Length Patterns</text>

  <rect x="590" y="60" width="280" height="150" rx="12" fill="url(#featGrad3)" opacity="0.9"/>
  <text x="730" y="85" font-family="Arial" font-size="13" font-weight="bold" fill="white" text-anchor="middle">Sentiment & NLP</text>
  <text x="730" y="110" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Sentiment Polarity</text>
  <text x="730" y="130" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Subjectivity Score</text>
  <text x="730" y="150" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Sensational Word Freq</text>
  <text x="730" y="170" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Emotional Trigger Words</text>
  <text x="730" y="190" font-family="Arial" font-size="11" fill="white" text-anchor="middle">- Stopword Ratio</text>

  <rect x="30" y="230" width="840" height="140" rx="12" fill="url(#featGrad4)" opacity="0.9"/>
  <text x="450" y="260" font-family="Arial" font-size="16" font-weight="bold" fill="white" text-anchor="middle">TF-IDF Vectorization Engine</text>

  <rect x="50" y="280" width="180" height="70" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="140" y="305" font-family="Arial" font-size="12" fill="white" text-anchor="middle">N-Gram Range</text>
  <text x="140" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle">1 - 3 grams</text>
  <text x="140" y="340" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Unigrams + Bigrams + Trigrams</text>

  <rect x="250" y="280" width="180" height="70" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="340" y="305" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Max Features</text>
  <text x="340" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle">8,000</text>
  <text x="340" y="340" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Top-K vocabulary selection</text>

  <rect x="450" y="280" width="180" height="70" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="540" y="305" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Vectorizer</text>
  <text x="540" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle">TF-IDF</text>
  <text x="540" y="340" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Term Frequency - Inverse Doc Freq</text>

  <rect x="650" y="280" width="200" height="70" rx="8" fill="#1e1b4b" opacity="0.7"/>
  <text x="750" y="305" font-family="Arial" font-size="12" fill="white" text-anchor="middle">Preprocessing</text>
  <text x="750" y="325" font-family="Arial" font-size="14" font-weight="bold" fill="#fbbf24" text-anchor="middle">Stemmed Tokens</text>
  <text x="750" y="340" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Porter Stemmer + Stopword Removal</text>
</svg>

</div>

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
|-- app.py                 # Main application (desktop + web)
|-- run.py                 # Alternative entry point
|-- config.py              # Configuration settings
|-- requirements.txt       # Python dependencies
|-- best_model.pkl         # Trained ML ensemble model
|-- model_results.pkl      # Model benchmark results
|-- news_dataset.csv       # Training dataset
|-- models/
|   |-- __init__.py        # DB + LoginManager init
|   |-- user.py            # User model (SQLAlchemy)
|   |-- predictor.py       # Enhanced NLP predictor
|-- routes/
|   |-- __init__.py        # Blueprint registration
|   |-- main.py            # Home, Features, About, Contact
|   |-- auth.py            # Login, Register, Logout
|   |-- dashboard.py       # Predict API, Batch API, Stats
|-- static/
|   |-- css/style.css      # Full UI styling (2000+ lines)
|   |-- js/neurons.js      # Interactive neuron background
|   |-- js/main.js         # Scroll reveal, nav, counters
|   |-- js/dashboard.js    # Dashboard interactions
|-- templates/
|   |-- base.html          # Master template
|   |-- index.html         # Home page
|   |-- features.html      # Features showcase
|   |-- about.html         # About project
|   |-- contact.html       # Contact page
|   |-- login.html         # Login form
|   |-- register.html      # Registration form
|   |-- dashboard.html     # Main dashboard
|   |-- 404.html           # Not found page
|   |-- 500.html           # Server error page
|-- instance/
    |-- users.db           # SQLite database (auto-created)
```

---

## 🔐 Authentication System

<div align="center">

<svg width="100%" height="200" viewBox="0 0 900 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="authGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="100%" style="stop-color:#a855f7"/>
    </linearGradient>
  </defs>

  <rect width="900" height="200" fill="#0f172a" rx="16"/>
  <text x="450" y="30" font-family="Arial" font-size="16" font-weight="bold" fill="#e2e8f0" text-anchor="middle">Secure Authentication Flow</text>

  <rect x="50" y="60" width="140" height="110" rx="10" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/>
  <text x="120" y="90" font-family="Arial" font-size="12" font-weight="bold" fill="#06b6d4" text-anchor="middle">Register</text>
  <text x="120" y="115" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Username</text>
  <text x="120" y="130" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Email + Full Name</text>
  <text x="120" y="145" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Password</text>
  <text x="120" y="160" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">PBKDF2-SHA256 Hash</text>

  <line x1="190" y1="115" x2="240" y2="115" stroke="#06b6d4" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="250" y="60" width="140" height="110" rx="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <text x="320" y="90" font-family="Arial" font-size="12" font-weight="bold" fill="#a855f7" text-anchor="middle">Login</text>
  <text x="320" y="115" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Username / Email</text>
  <text x="320" y="130" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Password Verify</text>
  <text x="320" y="145" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Session Created</text>
  <text x="320" y="160" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">Flask-Login Manager</text>

  <line x1="390" y1="115" x2="440" y2="115" stroke="#a855f7" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="450" y="60" width="140" height="110" rx="10" fill="#1e293b" stroke="#ec4899" stroke-width="2"/>
  <text x="520" y="90" font-family="Arial" font-size="12" font-weight="bold" fill="#ec4899" text-anchor="middle">Access Control</text>
  <text x="520" y="115" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Protected Routes</text>
  <text x="520" y="130" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Dashboard Only</text>
  <text x="520" y="145" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Remember Me</text>
  <text x="520" y="160" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">Flash Messages UX</text>

  <line x1="590" y1="115" x2="640" y2="115" stroke="#ec4899" stroke-width="2" marker-end="url(#arr)"/>

  <rect x="650" y="60" width="200" height="110" rx="10" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="750" y="90" font-family="Arial" font-size="12" font-weight="bold" fill="#10b981" text-anchor="middle">Logout</text>
  <text x="750" y="115" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Session Destroyed</text>
  <text x="750" y="130" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Redirect to Home</text>
  <text x="750" y="145" font-family="Arial" font-size="10" fill="#cbd5e1" text-anchor="middle">Secure Cookie Clear</text>
  <text x="750" y="160" font-family="Arial" font-size="9" fill="#94a3b8" text-anchor="middle">CSRF Protection Ready</text>
</svg>

</div>

---

## 🎨 UI Features

<div align="center">

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

</div>

---

## 📡 API Endpoints

<div align="center">

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

</div>

---

## 🧪 NLP Preprocessing Pipeline

```
Raw Text Input
    |
    v
URL Removal
    |
    v
Lowercasing
    |
    v
Punctuation Stripping
    |
    v
NLTK Tokenization
    |
    v
Stopword Removal
    |
    v
Porter Stemming
    |
    v
Clean Tokens
    |
    v
TF-IDF Vectorization
    |
    v
Feature Extraction
    |
    v
Ensemble Prediction
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

<!-- FOOTER BANNER SVG -->
<svg width="100%" height="120" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="footerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0f172a"/>
      <stop offset="25%" style="stop-color:#1e1b4b"/>
      <stop offset="50%" style="stop-color:#312e81"/>
      <stop offset="75%" style="stop-color:#1e1b4b"/>
      <stop offset="100%" style="stop-color:#0f172a"/>
    </linearGradient>
    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4"/>
      <stop offset="50%" style="stop-color:#a855f7"/>
      <stop offset="100%" style="stop-color:#ec4899"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="120" fill="url(#footerGrad)" rx="20"/>

  <circle cx="100" cy="60" r="3" fill="#06b6d4" opacity="0.6">
    <animate attributeName="cy" values="60;30;60" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
  </circle>
  <circle cx="300" cy="40" r="2" fill="#a855f7" opacity="0.5">
    <animate attributeName="cy" values="40;80;40" dur="5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="500" cy="80" r="4" fill="#ec4899" opacity="0.4">
    <animate attributeName="cy" values="80;40;80" dur="3s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite"/>
  </circle>
  <circle cx="700" cy="50" r="2" fill="#06b6d4" opacity="0.7">
    <animate attributeName="cy" values="50;70;50" dur="4.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.7;0.2;0.7" dur="4.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="900" cy="70" r="3" fill="#f59e0b" opacity="0.5">
    <animate attributeName="cy" values="70;30;70" dur="3.5s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.5;0.1;0.5" dur="3.5s" repeatCount="indefinite"/>
  </circle>
  <circle cx="1100" cy="45" r="2" fill="#10b981" opacity="0.6">
    <animate attributeName="cy" values="45;65;45" dur="4s" repeatCount="indefinite"/>
    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="4s" repeatCount="indefinite"/>
  </circle>

  <text x="600" y="55" font-family="Arial" font-size="20" font-weight="bold" fill="url(#textGrad)" text-anchor="middle">
    Built with passion for truth and technology
  </text>
  <text x="600" y="85" font-family="Arial" font-size="12" fill="#94a3b8" text-anchor="middle">
    NeuroGuard FND 2024 | AI-Powered Misinformation Detection
  </text>
  <text x="600" y="105" font-family="Arial" font-size="11" fill="#64748b" text-anchor="middle">
    Flask | scikit-learn | NLTK | SQLAlchemy | PyWebView
  </text>
</svg>

</div>
