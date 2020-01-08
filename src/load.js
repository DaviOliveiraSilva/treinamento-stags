const pokemons = [];
async function loadPokemons() {
    const x = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=150')
    let y = await x.json();
    for (let i = 0; i < y.results.length; i++) {
        const element = y.results[i];
        const request = await fetch(element.url)
        let pokemon = await request.json();
    
        pokemons[i] = pokemon
    }
}