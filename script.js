document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  const searchInput = document.getElementById('busquedaInput');
  const searchButton = document.getElementById('botonBusqueda');
  const resultsDiv = document.getElementById('results');

  // Función para buscar un Pokémon
  function searchPokemon() {
      const searchTerm = searchInput.value.trim();
      if (searchTerm === '') {
          return;
      }

      // Realizar una solicitud a la API con el término de búsqueda
      fetch(`${apiUrl}/${searchTerm}`)
          .then(response => response.json())
          .then(data => {
              const pokemon = data;
              displayPokemon(pokemon); // muestra el resultado
          })
          .catch(error => {
              console.error('Error al obtener datos de la PokeAPI:', error);
          });
  }

  // Función para mostrar el resultado del Pokémon
  function displayPokemon(pokemon) {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
          <h2>${pokemon.name}</h2>
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      `;
      resultsDiv.innerHTML = ''; // Limpiar resultados anteriores
      resultsDiv.appendChild(card); // Agregar la tarjeta del Pokémon al contenedor de resultados
  }

  // Escuchar el clic de búsqueda
  searchButton.addEventListener('click', searchPokemon);

  // Escuchar la tecla Enter para buscar
  searchInput.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
          searchPokemon();
      }
  });
});
