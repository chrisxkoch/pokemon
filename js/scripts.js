
var pokemonweight = {
  Bulbasaur: 15,
  Charmander: 18,
  Squirtle: 19,
};
var pokemonability = {
  Bulbasaur: ['overgrow'],
  Charmander: ['blaze'],
  Squirtle: ['torrent'],
};


var pokemon = {
  Bulbasaur:  {
      Weight: 15,
      Type: ['grass', 'poison']}
};
// I wanted to include all information in one, but failed...

document.querySelector('button').addEventListener('click', () => {
  
  var currentUserName = document.querySelector('#pokemon').value;
  
  document.querySelector('#pokemon_key').innerText = currentUserName;
  document.querySelector('#weight').innerText = pokemonweight[currentUserName];
  document.querySelector('#abilities').innerText = pokemonability[currentUserName];
  document.querySelector('#pokemon').innerText = pokemon[currentUserName];
  
});