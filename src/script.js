
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(data => {return data.json()})
    .then(response => console.log(response))
    .catch(error => console.error(error))
