var pokemons = [
  {
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

pokemons.forEach(function(pokemon){
document.write(pokemon.name + " ")
document.write(pokemon.height + " ")
document.write(pokemon.types + " " + "<br>")
});