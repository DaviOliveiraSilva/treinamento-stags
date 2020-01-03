var pokemons = [];
loadPokemons().then(() => {
    Array.from(document.getElementsByClassName('pokemon-container')).forEach((element, i) => {
        element.children.item('img').src = pokemons[i].sprites.front_default;
    });
})
