from flask import Flask, request, jsonify
from pymongo import MongoClient
import os
from dotenv import load_dotenv
import api

load_dotenv()  # Load environment variables from .env

app = Flask(__name__)

# MongoDB configuration
mongo_uri = os.getenv("MONGO_URI")
client = MongoClient(mongo_uri)
db = client['cow_monitoring']
task_collection = db['tasks']
animal_collection = db['animals']

# Register the Blueprint
app.register_blueprint(api.task_bp)
app.register_blueprint(api.animal_bp)

# Setip collection for API
api.init_task_collection(task_collection)
api. init_animal_collection(animal_collection)

if __name__ == '__main__':
    app.run(debug=True)