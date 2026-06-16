console.log('✅ JavaScript loaded successfully!');

const API_URL = 'http://localhost:5000';

// ========== LOAD ARENA ==========
async function loadArena() {
    try {
        console.log('📡 Fetching arena data...');
        const response = await fetch(`${API_URL}/api/arena`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Arena data:', data);
        
        const container = document.querySelector('.arena-cards');
        if (container) {
            container.innerHTML = data.map(item => `
                <div class="arena-card">
                    <h3>⚔️ ${item.title}</h3>
                    <p>👥 ${item.players} Players</p>
                    <p>💰 ${item.prize}</p>
                </div>
            `).join('');
            console.log('✅ Arena cards rendered!');
        }
    } catch (error) {
        console.error('❌ Error loading arena:', error);
        document.querySelector('.arena-cards').innerHTML = `
            <p style="color: #ff6b6b;">❌ Failed to load arena data. Make sure Flask is running.</p>
        `;
    }
}

// ========== LOAD RANKING ==========
async function loadRanking() {
    try {
        console.log('📡 Fetching ranking data...');
        const response = await fetch(`${API_URL}/api/ranking`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Ranking data:', data);
        
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
                        <tr>
                            <th>Rank</th>
                            <th>Player</th>
                            <th>Score</th>
                            <th>Region</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${data.map(item => `
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
            console.log('✅ Ranking table rendered!');
        }
    } catch (error) {
        console.error('❌ Error loading ranking:', error);
        document.querySelector('.ranking-table').innerHTML = `
            <p style="color: #ff6b6b;">❌ Failed to load ranking data.</p>
        `;
    }
}

// ========== LOAD EPISODES ==========
async function loadEpisodes() {
    try {
        console.log('📡 Fetching episodes data...');
        const response = await fetch(`${API_URL}/api/episodes`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('✅ Episodes data:', data);
        
        const container = document.querySelector('.episode-grid');
        if (container) {
            container.innerHTML = data.map(item => `
                <div class="episode-card">
                    <h3>📺 ${item.title}</h3>
                    <p>👁️ ${item.views.toLocaleString()} Views</p>
                    <p>📅 ${item.date}</p>
                </div>
            `).join('');
            console.log('✅ Episodes rendered!');
        }
    } catch (error) {
        console.error('❌ Error loading episodes:', error);
        document.querySelector('.episode-grid').innerHTML = `
            <p style="color: #ff6b6b;">❌ Failed to load episodes.</p>
        `;
    }
}

// ========== CHECK SERVER ==========
async function checkServer() {
    try {
        const response = await fetch(`${API_URL}/api/health`);
        const data = await response.json();
        console.log('✅ Server is healthy:', data);
        return true;
    } catch (error) {
        console.error('❌ Server not running:', error);
        return false;
    }
}

// ========== INITIALIZE ==========
document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Page loaded!');
    
    const isServerRunning = await checkServer();
    
    if (isServerRunning) {
        await loadArena();
        await loadRanking();
        await loadEpisodes();
        console.log('✅ All data loaded! 🎉');
    } else {
        document.querySelector('.hero-content').innerHTML += `
            <div style="color: #ff6b6b; padding: 20px; background: rgba(255,0,0,0.1); border-radius: 8px; margin-top: 20px;">
                ⚠️ Server not running!<br>
                Open terminal and run: <code>cd D:\\project\\botmakers-dashboard\\backend && python app.py</code>
            </div>
        `;
    }
});