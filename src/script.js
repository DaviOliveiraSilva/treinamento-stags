var pokemons = [];
loadPokemons().then(() => {
    console.log(pokemons);
    open('home')
})

function test() {
    console.log('deu bom');
}

function open(page){
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', `pages/${page}.html`, true);
    rawFile.setRequestHeader('Content-Type', 'application/xml');
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.getElementById("container").innerHTML = allText
            }
        }
    }
    rawFile.send();
}