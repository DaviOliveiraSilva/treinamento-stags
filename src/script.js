loadPokemons().then(loadEvolutions).then(load.bind(this, [0]));

function load(index) {
    x = document.getElementsByClassName('evolutions__item')
    x = Array.from(x);
    element = evolutions[index]
    
    x.forEach((div, index) => {

        if(element[index]){    
            div.style.display = 'flex';
            types = [];

            element[index].types.forEach(t => {
                types.push(t.type.name)
                
            })

            div.children[0].src = element[index].sprites.front_default;        
            div.children[1].children[1].innerText = ` ${element[index].name}`
            div.children[2].children[1].innerText = ` ${types.toString()}`;
        }
        else {
            div.style.display = 'none';
        }
    });
}

async function loadEvolutions() {
    evolutions = [];
    for (let i = 1; i <= 10; i++) {
        chain = [];
        const x = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${i}`)
        let y = await x.json();
        chain_step = y.chain

        while (chain_step.evolves_to.length > 0) {
            actualPokemon = pokemons.find(item => item.name === chain_step.species.name)
            
            actualPokemon ? chain.push(actualPokemon) : null;
            
            chain_step = chain_step.evolves_to[0]
        }
        actualPokemon = pokemons.find(item => item.name === chain_step.species.name)
        actualPokemon ? chain.push(actualPokemon) : null;

        evolutions.push(chain)
    }
}

indexAtual = 0;

function nextPokemon() {
    if (indexAtual < 9){
        indexAtual++;
        load(indexAtual)
    }
}

function previousPokemon() {
    if (indexAtual > 0){
        indexAtual--;
        load(indexAtual)
    }
}