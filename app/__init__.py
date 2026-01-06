from flask import Flask
import os

def create_app():
    app = Flask(__name__, static_folder='../static', static_url_path='/static')

    with app.app_context():
        from .routes import bp
        app.register_blueprint(bp)

    return app
