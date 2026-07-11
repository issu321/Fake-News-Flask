import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'fnd-nlp-secret-key-2026-issu321'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or 'sqlite:///users.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    MODEL_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'best_model.pkl')
    RESULTS_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'model_results.pkl')
    DATASET_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'news_dataset.csv')
