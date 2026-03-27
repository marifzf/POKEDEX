const cores = {
    fire: '#ee8130',
    grass: '#7ac74c',
    water: '#6390f0',
    bug: '#a6b91a',
    normal: '#a8a77a',
    electric: '#f7d02c',
    poison: '#a33ea1',
    fairy: '#d685ad',
    ground: '#e2bf65'
};

async function buscarPokemons() {
    const idsDestaque = [25, 2, 5, 8, 1, 4, 7, 10, 12];

for (let id of idsDestaque) {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const pokemon = await resposta.json();
            renderizarPokemon(pokemon);
        } catch (erro) {
            console.error("Erro ao buscar Pokémon:", erro);
        }
    }
}

function renderizarPokemon(pokemon) {
    const pokemonList = document.getElementById('pokemon-list');
    
    // Identificação dos dados
    const tipo = pokemon.types[0].type.name;
    const corCard = cores[tipo] || '#777';
    const idFormatado = pokemon.id.toString().padStart(3, '0');

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('pokemon-item');

    itemContainer.innerHTML = `
        <!-- Imagem posicionada para fora do card -->
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}" class="pokemon-over">
        
        <div class="pokemon-card" style="background-color: ${corCard};">
            <div class="card-info">
                <!-- Linha superior: Nome e ID -->
                <div class="nome-id-row">
                    <h3>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
                    <span>#${idFormatado}</span>
                </div>
                
                <!-- Badge (pílula) do tipo -->
                <div class="tipo-badge">${tipo}</div>
            </div>
        </div>
    `;

    pokemonList.appendChild(itemContainer);
}

function scrollCarousel(direction) {
    const container = document.getElementById('pokemon-list');
    const scrollAmount = container.clientWidth + 20; 
    
    container.scrollBy({
        left: scrollAmount * direction,
        behavior: 'smooth'
    });
}
// Inicia a busca
buscarPokemons();

