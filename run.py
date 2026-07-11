from app import create_app, run_flask_server, launch_desktop_window
import threading
import sys

app = create_app()
port = 5000

if __name__ == '__main__':
    if '--server-only' in sys.argv:
        print("🌐 Starting in WEB SERVER mode...")
        print(f"   → http://127.0.0.1:{port}/")
        app.run(debug=True, host='0.0.0.0', port=port)
    else:
        print("🖥️  Starting NeuroGuard FND Desktop App...")
        server_thread = threading.Thread(target=run_flask_server, args=(app, port), daemon=True)
        server_thread.start()
        launch_desktop_window(port)
