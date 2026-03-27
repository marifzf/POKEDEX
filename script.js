const pokemonIds = [1, 4, 7, 2]; 
const container = document.getElementById('pokemon-list');

async function fetchPokemons() {
    for (const id of pokemonIds) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        createCard(data);
    }
}

function createCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');

    // Pegando a imagem oficial em alta definição
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    card.innerHTML = `
        <img src="${imageUrl}" alt="${pokemon.name}">
        <h3>${pokemon.name.toUpperCase()}</h3>
        <p>#${pokemon.id.toString().padStart(3, '0')}</p>
    `;
    
    container.appendChild(card);
}

fetchPokemons();