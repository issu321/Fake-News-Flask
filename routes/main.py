from flask import render_template, jsonify
from . import main_bp
import joblib
import os
from config import Config

@main_bp.route('/')
def index():
    return render_template('index.html')

@main_bp.route('/features')
def features():
    return render_template('features.html')

@main_bp.route('/about')
def about():
    return render_template('about.html')

@main_bp.route('/contact')
def contact():
    return render_template('contact.html')

@main_bp.route('/api/model-stats')
def model_stats():
    try:
        results = joblib.load(Config.RESULTS_PATH)
        best = max(results, key=lambda x: results[x]['f1'])
        return jsonify({
            'best_model': best,
            'accuracy': results[best]['accuracy'],
            'f1': results[best]['f1'],
            'models': list(results.keys())
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
