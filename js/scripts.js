var repository = [
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

Object.keys(repository).forEach(function(information)
{
  document.write(repository.[information] + '<br>');
});
