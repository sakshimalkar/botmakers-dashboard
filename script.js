 console.log('✅ JavaScript loaded successfully!');

// ========== DATA STORED DIRECTLY IN JAVASCRIPT ==========

const arenaData = [
    {"id": 1, "title": "Battle Royale", "players": 1200, "prize": "$10,000"},
    {"id": 2, "title": "Team Deathmatch", "players": 850, "prize": "$5,000"},
    {"id": 3, "title": "Capture the Flag", "players": 600, "prize": "$3,000"},
];

const rankingData = [
    {"rank": 1, "name": "PlayerOne", "score": 9850, "region": "Mumbai"},
    {"rank": 2, "name": "GamerPro", "score": 9200, "region": "Delhi"},
    {"rank": 3, "name": "Shadow_007", "score": 8800, "region": "Bangalore"},
    {"rank": 4, "name": "PixelWarrior", "score": 8500, "region": "Hyderabad"},
    {"rank": 5, "name": "Nova_Star", "score": 8200, "region": "Pune"},
];

const episodesData = [
    {"id": 1, "title": "Episode 1: The Beginning", "views": 15000, "date": "2026-06-10"},
    {"id": 2, "title": "Episode 2: The Challenge", "views": 12000, "date": "2026-06-12"},
    {"id": 3, "title": "Episode 3: The Finale", "views": 10000, "date": "2026-06-14"},
];

// ========== LOAD ARENA ==========
function loadArena() {
    const container = document.querySelector('.arena-cards');
    if (container) {
        container.innerHTML = arenaData.map(item => `
            <div class="arena-card">
                <h3>⚔️ ${item.title}</h3>
                <p>👥 ${item.players} Players</p>
                <p>💰 ${item.prize}</p>
            </div>
        `).join('');
        console.log('✅ Arena loaded!');
    }
}

// ========== LOAD RANKING ==========
function loadRanking() {
    const container = document.querySelector('.ranking-table');
    if (container) {
        const getMedal = (rank) => {
            if (rank === 1) return '🥇';
            if (rank === 2) return '🥈';
            if (rank === 3) return '🥉';
            return `#${rank}`;
        };
        
        container.innerHTML = `
            <table>
                <thead>
                    <tr><th>Rank</th><th>Player</th><th>Score</th><th>Region</th></tr>
                </thead>
                <tbody>
                    ${rankingData.map(item => `
                        <tr>
                            <td><strong>${getMedal(item.rank)}</strong></td>
                            <td>${item.name}</td>
                            <td>${item.score.toLocaleString()}</td>
                            <td>📍 ${item.region}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        `;
        console.log('✅ Ranking loaded!');
    }
}

// ========== LOAD EPISODES ==========
function loadEpisodes() {
    const container = document.querySelector('.episode-grid');
    if (container) {
        container.innerHTML = episodesData.map(item => `
            <div class="episode-card">
                <h3>📺 ${item.title}</h3>
                <p>👁️ ${item.views.toLocaleString()} Views</p>
                <p>📅 ${item.date}</p>
            </div>
        `).join('');
        console.log('✅ Episodes loaded!');
    }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Page loaded! Loading data from JavaScript...');
    loadArena();
    loadRanking();
    loadEpisodes();
    console.log('✅ All data loaded from JavaScript! 🎉');
});