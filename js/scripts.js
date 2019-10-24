var pokemonRepository = (function() { //start of IIFE
    var repository = [];

    var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    function add(item) {
        repository.push(item);
    };

    function getAll() {
        return repository;
    }
    // Loading data from external API
    function loadList() {
        return fetch(apiUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            json.results.forEach(function(item) {
                var pokemon = {
                    name: item.name,
                    detailsUrl: item.url
                };
                add(pokemon);
                console.log(item);
            });
        }).catch(function(e) {
            console.error(e);
        })
    }

    function addListItem(pokemon = {}) {
        var pokemonList = document.querySelector('.pokemon-list');
        var $listItem = document.createElement('li'); //create an li element that contains a button for each Pokémon
        var button = document.createElement('button'); //creates the button element
        $listItem.classList.add('pokemon-list__item');
        button.innerText = pokemon.name; //Set the innerText of the button to be the Pokémon's name
        button.classList.add('button__style'); //Add a class to the button using the classList.add method
        $listItem.appendChild(button); //append the button to the list item as its child.
        pokemonList.appendChild($listItem); //append the child in the repository pokemon
        button.addEventListener('click', function(event) {
            showDetails(pokemon); // creating the button as a function/event to be able to click in the future, if need more details.


        });
    }


    // pokemon details from URL
    function loadDetails(item) {
        var url = item.detailsUrl;
        return fetch(url).then(function(response) {
            return response.json();
        }).then(function(details) {
            // This adds details to the item
            item.imageUrl = details.sprites.front_default;
            item.height = details.height;
            item.weight = details.weight;
            item.types = Object.keys(details.types);
        }).catch(function(e) {
            console.error(e);
        });
    }

    function showDetails(item) {
        pokemonRepository.loadDetails(item).then(function() {
            console.log(item);
        });

    }

    return {
        loadList: loadList,
        addListItem: addListItem,
        showDetails: showDetails,
        add: add,
        getAll: getAll,
        loadDetails: loadDetails,
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});