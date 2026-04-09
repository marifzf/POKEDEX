// Variável global para armazenar todos os dados do JSON
let pokemonData = [];
// Variável para armazenar os dados filtrados 
let filteredPokemon = [];

const grid = document.getElementById('pokemonGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const searchInput = document.getElementById('searchInput');

let itemsToShow = 8;
const increment = 4;

// Busca os dados do arquivo JSON externo
async function loadPokemonData() {
    try {
        const response = await fetch('pokemon-data.json');
        if (!response.ok) throw new Error('Não foi possível carregar o JSON');
        
        pokemonData = await response.json();
        filteredPokemon = [...pokemonData]; // Inicialmente, os filtrados são todos
        
        renderCards();
        setupSearch();
    } catch (error) {
        console.error("Erro:", error);
        grid.innerHTML = `<p style="color: white; text-align: center;">Erro ao carregar Pokédex. Verifique se está usando um servidor local.</p>`;
    }
}

// Configura a barra de busca por nome ou ID

function setupSearch() {
    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        
        filteredPokemon = pokemonData.filter(pokemon => 
            pokemon.name.toLowerCase().includes(term) || 
            pokemon.id.toString().includes(term)
        );
        
        itemsToShow = 8; // Reseta o contador ao buscar
        renderCards();
    });
}

// Renderiza os cards no grid

function renderCards() {
    const visible = filteredPokemon.slice(0, itemsToShow);
    
    grid.innerHTML = visible.map(pokemon => {
        // Lógica de cores de fundo (gradiente para tipos duplos)
        let backgroundStyle = '';
        if (pokemon.type.length > 1) {
            const color1 = `var(--clr-${pokemon.type[0]})`;
            const color2 = `var(--clr-${pokemon.type[1]})`;
            backgroundStyle = `background: linear-gradient(45deg, ${color1} 0%, ${color2} 100%);`;
        } else {
            backgroundStyle = `background-color: var(--clr-${pokemon.type[0]});`;
        }

        return `
            <div class="pokemon-card-container">
                <div class="pokemon-card-base" style="${backgroundStyle}">
                    
                    <span class="hp-badge">HP ${pokemon.hp}</span>

                    <div class="favorite-toggle" onclick="toggleFavorite(this)">
                        <div class="pokeball-icons-wrapper">
                            <svg class="icon-outline" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="10" stroke="white" stroke-width="2"/>
                                <path d="M2 12h20" stroke="white" stroke-width="2"/>
                                <circle cx="12" cy="12" r="3" stroke="white" stroke-width="2"/>
                            </svg>
                            <svg class="icon-filled" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C6.48 2 2 6.48 2 12h20C22 6.48 17.52 2 12 2z" fill="#EE1515"/>
                                <path d="M12 22c5.52 0 10-4.48 10-10H2c0 5.52 4.48 10 10 10z" fill="white"/>
                                <rect x="2" y="11" width="20" height="2" fill="#222222"/>
                                <circle cx="12" cy="12" r="4" fill="white" stroke="#222222" stroke-width="1.5"/>
                                <circle cx="12" cy="12" r="1.5" fill="#222222"/>
                                <circle cx="12" cy="12" r="10" stroke="#222222" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>

                    <img src="${pokemon.image}" class="pokemon-image" alt="${pokemon.name}">

                    <div class="glass-info-panel">
                        <div class="header-row">
                            <h3 class="pokemon-name">${pokemon.name}</h3>
                            <span class="pokemon-number">#${pokemon.id.toString().padStart(3, '0')}</span>
                        </div>
                        <div class="types-wrapper">
                            ${pokemon.type.map(t => `<span class="type-badge ${t}">${t}</span>`).join('')}
                        </div>
                    </div>
                </div>

                <button class="expand-btn" onclick="toggleDetails(this)">▼</button>
                
                <div class="details-panel">
                    <div class="details-content">
                        <div class="stat-row"><span>Ataque</span><span class="stat-val">${pokemon.attack}</span></div>
                        <div class="stat-row"><span>Defesa</span><span class="stat-val">${pokemon.defense}</span></div>
                        <div class="moves-section">
                            <p>Ataques:</p>
                            <div class="moves-grid">
                                ${pokemon.moves.map(move => `<button class="pixel-move-btn">${move}</button>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Gerencia o botão Carregar Mais
    if (itemsToShow >= filteredPokemon.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'block';
    }
}

function loadMore() {
    itemsToShow += increment;
    renderCards();
}

function toggleDetails(btn) {
    const panel = btn.nextElementSibling;
    panel.classList.toggle('open');
    btn.textContent = panel.classList.contains('open') ? '▲' : '▼';
}

function toggleFavorite(el) {
    el.classList.toggle('is-favorite');
}

// Botão voltar ao topo
window.onscroll = () => {
    const btn = document.getElementById("backToTop");
    btn.classList.toggle("show", window.scrollY > 300);
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Início
loadPokemonData();