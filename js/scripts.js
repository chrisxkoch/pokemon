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

    function addListItem(pokemon = {}) {
        var $listItem = document.createElement('li'); //create an li element that contains a button for each Pokémon
        var button = document.createElement('button');
        button.innerText = pokemon.name; //Set the innerText of the button to be the Pokémon's name
        $listItem.classList.add('pokemon-list__item'); //Add a class to the button using the classList.add method
        $listItem.appendChild(button); //append the button to the list item as its child.
        pokemonList.appendChild($listItem); //append the list item to the unordered list as its child.
        button.addEventListener('click', function(event) {
            showDetails(pokemon); // creating the button as a function/event to be able to click in the future, if need more details.
        });
    }

    function showDetails(pokemon) {
        console.log(pokemon)

    }

    function add(pokemon) {
        repository.push(pokemon);
    }

    function getAll() {
        return repository;
    }
    return {
        add: add,
        getAll: getAll,
        addListItem: addListItem
    };

})();

var pokemonList = document.querySelector('.pokemon-list'); //create variable, assign the ul element

pokemonRepository.getAll().forEach(function(pokemon) { //loop
    pokemonRepository.addListItem(pokemon);
});