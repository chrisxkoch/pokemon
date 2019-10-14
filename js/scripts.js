var pokemonRepository = (function() {
  var repository = [{
          name: 'Bulbasaur',
          height: 0.7,
          types: ['grass, poison']
      },
      {
          name: 'Charmander',
          height: 1.7,
          types: ['fire']
      },
      {
          name: 'Squirtle',
          height: 0.9,
          types: ['water']
      }
  ];

  function add(pokemon) {
      repository.push(pokemon);
  }

  function getAll() {
      return repository;
  }
  return {
      add: add,
      getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.add(pokemon);

  document.write(pokemon.name + " ")
  document.write(pokemon.height + " ")
  document.write(pokemon.types + " " + "<br>")


});