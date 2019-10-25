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
            showModal(item);
            console.log(item);
        });

    }

    // create Modal-Content
    function showModal(item) {
        var $modalContainer = document.querySelector('#modal-container');

        // clear existing Modal-Content
        $modalContainer.innerHTML = '';

        // create div element in DOM
        var modal = document.createElement('div');
        // add class to div DOM element
        modal.classList.add('modal');
        // create element to name in Modal-Content
        var nameElement = document.createElement('h1');
        nameElement.innerText = item.name;
        // create img in Modal-Content
        var imageElement = document.createElement('img');
        imageElement.classList.add('modal-img');
        imageElement.setAttribute('src', item.imageUrl)

        // create element for height
        var heightElement = document.createElement('p');
        heightElement.innerText = 'height : ' + item.height;
        // create element for weight
        var typesElement = document.createElement('p');
        typesElement.innerText = 'weight : ' + item.weight;

        // close Button in Modal-Content
        var closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('modal-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideModal);

        // append Modal_Content to Webpage
        modal.appendChild(closeButtonElement);
        modal.appendChild(nameElement);
        modal.appendChild(imageElement);
        modal.appendChild(heightElement);
        modal.appendChild(typesElement);
        $modalContainer.appendChild(modal);

        // adds class to show the Modal
        $modalContainer.classList.add('is-visible');

    }

    // hides Modal when you click on close button
    function hideModal() {
        var $modalContainer = document.querySelector('#modal-container');
        $modalContainer.classList.remove('is-visible');
    }

    // hides Modal when clicked on ESC on keyboard

    window.addEventListener('keydown', (e) => {
        var $modalContainer = document.querySelector('#modal-container');

        if (
            e.key === 'Escape' && $modalContainer.classList.contains('is-visible')
        ) {
            hideModal();
        }
    });

    // hides Modal if clicked outside of it
    var $modalContainer = document.querySelector('.pokemon-list');
    $modalContainer.addEventListener('click', (e) => {
        var target = e.target;
        if (target === $modalContainer) {
            hideModal();
        }
    });




    return {
        loadList: loadList,
        addListItem: addListItem,
        showDetails: showDetails,
        add: add,
        getAll: getAll,
        loadDetails: loadDetails,
        showModal: showModal,
        hideModal: hideModal
    };

})();

pokemonRepository.loadList().then(function() {
    pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
    });
});