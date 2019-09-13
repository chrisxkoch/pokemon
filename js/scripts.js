var information = [
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

for (var i = 0; i < information.length; i++) {
  if (information[i].height < 1) {
  document.write("<button>" + information[i].name + "</button>" + ' ' + information[i].height + "<br >");
} else {
  document.write("<button>" + information[i].name + "</button>" + ' ' + information[i].height + ' ' + 'Wow, that is big!' + "<br >");
}
}

 