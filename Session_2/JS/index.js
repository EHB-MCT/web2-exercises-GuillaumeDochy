import Team from './team.js';

let list = [];
let pokemon = [];

let team1 = new Team();

function getData() {
    //get the list
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            return response.json();
        }).then(data => {
            list = data.results;
            for (let element of list) {
                fetch(element.url).then(response => {
                    return response.json();
                }).then(data => {
                    pokemon.push(data);
                })
            }
        });
}

window.onload = function () {

    getData();
    setTimeout(buildList, 3000);

    function buildList() {
        let html = '';
        pokemon.sort(function (a, b) {
            return a.id - b.id;
        });


        for (let p of pokemon) {
            html += `<div class="card" style="width: 10rem; margin: 3px;">
            <img class="card-img-top" src="${p.sprites.front_default}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <a href="#" id="${p.id}" class="btn btn-primary ">Add to team</a>
            </div>
            </div>`
        }
        document.getElementById('list').innerHTML = html;

        document.querySelectorAll('.btn').forEach(item => {
            item.addEventListener('click', event => {
                let id = event.target.id;
            });
        });
    }

    refreshTeam();





}

function refreshTeam() {
    document.getElementById('team').innerHTML = team1.describe();
}