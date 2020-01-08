var pokemons = new Array;
loadPokemons().then(() => {
    console.log(pokemons);
    open('home')
})

function open(page){
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', `pages/${page}/${page}.html`, true);
    rawFile.setRequestHeader('Content-Type', 'application/xml');
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                document.getElementById("content").innerHTML = allText
            }
        }
    }
    rawFile.send();
}

function test() {
    console.log('WOOOOOOW')
}