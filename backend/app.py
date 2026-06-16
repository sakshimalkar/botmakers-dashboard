from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../frontend', static_url_path='/')
CORS(app)

# ========== SERVE FRONTEND ==========
@app.route('/')
def serve_index():
    """Serve the main HTML page"""
    return send_from_directory('../frontend', 'index.html')

@app.route('/style.css')
def serve_css():
    """Serve CSS file"""
    return send_from_directory('../frontend', 'style.css')

@app.route('/script.js')
def serve_js():
    """Serve JavaScript file"""
    return send_from_directory('../frontend', 'script.js')

# ========== API ROUTES ==========
@app.route('/api/arena', methods=['GET'])
def get_arena():
    """Get arena games data"""
    arena_data = [
        {"id": 1, "title": "Battle Royale", "players": 1200, "prize": "$10,000"},
        {"id": 2, "title": "Team Deathmatch", "players": 850, "prize": "$5,000"},
        {"id": 3, "title": "Capture the Flag", "players": 600, "prize": "$3,000"},
    ]
    return jsonify(arena_data)

@app.route('/api/ranking', methods=['GET'])
def get_ranking():
    """Get national ranking data"""
    ranking_data = [
        {"rank": 1, "name": "PlayerOne", "score": 9850, "region": "Mumbai"},
        {"rank": 2, "name": "GamerPro", "score": 9200, "region": "Delhi"},
        {"rank": 3, "name": "Shadow_007", "score": 8800, "region": "Bangalore"},
        {"rank": 4, "name": "PixelWarrior", "score": 8500, "region": "Hyderabad"},
        {"rank": 5, "name": "Nova_Star", "score": 8200, "region": "Pune"},
    ]
    return jsonify(ranking_data)

@app.route('/api/episodes', methods=['GET'])
def get_episodes():
    """Get episodes data"""
    episodes_data = [
        {"id": 1, "title": "Episode 1: The Beginning", "views": 15000, "date": "2026-06-10"},
        {"id": 2, "title": "Episode 2: The Challenge", "views": 12000, "date": "2026-06-12"},
        {"id": 3, "title": "Episode 3: The Finale", "views": 10000, "date": "2026-06-14"},
    ]
    return jsonify(episodes_data)

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "ok", "message": "Server is running!"})

if __name__ == '__main__':
    print("🚀 BotMakers Server Starting...")
    print("📍 Visit: http://localhost:5000")
    print("📡 API Endpoints:")
    print("   - /api/arena")
    print("   - /api/ranking")
    print("   - /api/episodes")
    app.run(debug=True, port=5000)