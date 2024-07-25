document.addEventListener('DOMContentLoaded', () => {
    fetch('levelinfo.txt')
        .then(response => response.text())
        .then(data => {
            const levels = data.split('\n').filter(line => line.trim() !== '');
            const levelListDiv = document.getElementById('level-list');

            levels.forEach((level, index) => {
                const levelItemDiv = document.createElement('div');
                levelItemDiv.className = 'level-item';

                const levelTitle = document.createElement('h2');
                levelTitle.textContent = `Level ${index + 1}`;
                levelItemDiv.appendChild(levelTitle);

                const levelDescription = document.createElement('p');
                levelDescription.textContent = level;
                levelItemDiv.appendChild(levelDescription);

                levelListDiv.appendChild(levelItemDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching level info:', error);
            const levelListDiv = document.getElementById('level-list');
            levelListDiv.innerHTML = '<p>Error loading level information.</p>';
        });
});
