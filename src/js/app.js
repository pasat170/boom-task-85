import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const pokedex = document.getElementById('pokedex');
    let results = [];
    function displayPokemons() {
        results.forEach((pokemon) => {
            const container = document.createElement("div");
            container.classList.add("row");

            const nameCol = document.createElement("div");
            nameCol.classList.add("col");

            const name = document.createElement("li");
            name.innerText = pokemon["name"];

            nameCol.appendChild(name);
            container.appendChild(nameCol);
            pokedex.appendChild(container);
        })
    }

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=10")
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            console.log(json);
            results = json["results"];
            displayPokemons();
        })
        .catch((error) => {
            console.log(error);
        })
    
});
