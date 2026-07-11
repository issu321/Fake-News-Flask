import os
import sys
import threading
import time
from flask import Flask, render_template
from config import Config
from models import db, login_manager, init_app
from models.user import User
from routes import main_bp, auth_bp, dashboard_bp

def create_app(config_class=Config):
    app = Flask(__name__, 
                template_folder='templates',
                static_folder='static',
                instance_relative_config=True)
    app.config.from_object(config_class)

    # Ensure instance folder exists
    os.makedirs(app.instance_path, exist_ok=True)

    # Initialize extensions
    init_app(app)

    # Register blueprints
    app.register_blueprint(main_bp)
    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)

    # User loader
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(int(user_id))

    # Context processor for global template variables
    @app.context_processor
    def inject_globals():
        return {
            'app_name': 'NeuroGuard FND',
            'app_version': '2.0',
            'developer': 'Mohammed Usman',
            'github': 'issu321',
            'email': 'jaafreeusman@gmail.com',
            'phone': '8884294749'
        }

    # Error handlers
    @app.errorhandler(404)
    def not_found(e):
        return render_template('404.html'), 404

    @app.errorhandler(500)
    def internal_error(e):
        db.session.rollback()
        return render_template('500.html'), 500

    return app


def run_flask_server(app, port=5000):
    """Run Flask server in a thread."""
    app.run(debug=False, host='127.0.0.1', port=port, use_reloader=False)


def launch_desktop_window(port=5000):
    """Launch native desktop window using pywebview."""
    try:
        import webview

        # Wait for server to start
        time.sleep(1.5)

        window = webview.create_window(
            'NeuroGuard FND - Fake News Detection',
            f'http://127.0.0.1:{port}/',
            width=1400,
            height=900,
            resizable=True,
            fullscreen=False,
            text_select=True,
            confirm_close=True
        )

        webview.start(debug=False)
    except ImportError:
        print("⚠️  pywebview not installed. Opening in browser instead.")
        import webbrowser
        webbrowser.open(f'http://127.0.0.1:{port}/')
        print(f"🌐 Open http://127.0.0.1:{port}/ in your browser")
        # Keep the main thread alive
        while True:
            time.sleep(1)


if __name__ == '__main__':
    app = create_app()
    port = 5000

    # Check if --server-only flag is passed (web mode)
    if '--server-only' in sys.argv:
        print("🌐 Starting in WEB SERVER mode...")
        print(f"   → http://127.0.0.1:{port}/")
        app.run(debug=True, host='0.0.0.0', port=port)
    else:
        # DESKTOP MODE (default)
        print("🖥️  Starting NeuroGuard FND Desktop App...")
        print("   Developer: Mohammed Usman")
        print("   GitHub: issu321")
        print("   Model: Enhanced Ensemble NLP")
        print()

        # Start Flask in background thread
        server_thread = threading.Thread(
            target=run_flask_server,
            args=(app, port),
            daemon=True
        )
        server_thread.start()

        # Launch desktop window
        launch_desktop_window(port)
