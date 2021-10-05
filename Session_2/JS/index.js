'use strict';

import Team from "./team.js";

let team = new Team('da charizards');
team.describe();

let list = [];
let pokemons = [];

class Pokemons {
    constructor() {
        this.url = '';
    }
    fetcher() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                list = data.results;
                list.forEach(pokemon => {
                    fetch(`${pokemon.url}`)
                        .then(response => {
                            return response.json();
                        })
                        .then(data => {
                            pokemons.push(data);
                        })
                });
            })
    }
}

let pokemon = new Pokemons();


pokemon.fetcher();

window.onload = function () {
    setTimeout(buildList, 1000);
    let card = document.getElementById("container");

    function buildList() {

        let htmlString = "";
        let htmlStringTypes = '';

        pokemons.forEach(pokemon => {
            for (let i = 0; i < pokemon.types.length; i++) {
                htmlStringTypes += `<p class="type" id = "${pokemon.types[i].type.name}>${pokemon.types[i].type.name}</p>`;
            }
            console.log(pokemon);
            htmlString += `
            <div class="pokemonCard" id="pokemonCard">
            <img class="img" src="${pokemon.sprites.front_default}"></img>
            <h3 class="name">${pokemon.name}</h3>
            <div class="typeDiv" id="typeDiv">
            </div>
            <button class="teamBtn">Add to team</button>
            </div>`;

        });
        card.innerHTML = htmlString;
        let type = document.getElementById("typeDiv");
        type.innerHTML = htmlStringTypes;
    }
}