loadPokemons().then(() => {
    console.log(pokemons);
})

const openPage = () =>{
    const local = location.hash.slice(2);
    
    var rawFile = new XMLHttpRequest();
    rawFile.open('GET', `pages/${local}.html`, true);
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

window.addEventListener('hashchange', openPage)
window.addEventListener('load', openPage)
