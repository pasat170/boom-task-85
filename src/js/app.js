import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready

    const pokenames = document.getElementById('pokenames');

    const fetchPokemon = () => {
        const promises = [];
        for (let i = 1; i <= 10; i++) {
            const url = `https://pokeapi.co/api/v2/pokemon/${i}/?limit=10`;
            promises.push(fetch(url).then((res) => res.json()));
        }
        Promise.all(promises).then((results) => {
            const pokemon = results.map((result) => ({
                name: result.name,
                id: result.id
            }));
            displayPokemon(pokemon);
        });
    };

    const displayPokemon = (pokemon) => {
        console.log(pokemon);
        const pokemonHTMLString = pokemon
            .map(
                (pokeman) => `
        <li>   
            <h1>${pokeman.name}</h1> 
        </li>
    `
            )
            .join('');
        pokenames.innerHTML = pokemonHTMLString;
    };

    fetchPokemon();
});
