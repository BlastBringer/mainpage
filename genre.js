const button = document.getElementById("mybutton");
const para = document.getElementById("para");

const front = "https://img.pokemondb.net/sprites/black-white/anim/shiny/";
const back = "https://img.pokemondb.net/sprites/black-white/anim/back-shiny/";

const pokemons= ["articuno", "zapdos", "moltres", "mewtwo", "mew", "raikou", "entei", "suicune","lugia", "ho-oh", "celebi", "regirock", "regice", "registeel", "latias", "latios","kyogre", "groudon", "rayquaza", "jirachi", "deoxys", "uxie", "mesprit", "azelf","dialga", "palkia", "heatran", "regigigas", "giratina", "cresselia", "darkrai","manaphy", "shaymin", "arceus", "victini", "cobalion", "terrakion", "virizion","tornadus", "thundurus", "reshiram", "zekrom", "landorus", "kyurem", "keldeo", "meloetta", "genesect"];
const pokemon_name = document.getElementById("pokemon-name");

button.addEventListener("click", function () {
    let randomnum = pokemons[Math.floor(Math.random() * pokemons.length)];
    pokemon_name.innerHTML = randomnum.toUpperCase();
    const path_front = front + randomnum + ".gif";
    const path_back = back + randomnum + ".gif";
    document.getElementById("front").src = path_front;
    document.getElementById("back").src = path_back;
    
});

