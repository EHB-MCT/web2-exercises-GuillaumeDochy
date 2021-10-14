'use strict';

//879cb43fa6024d69b614737f14e041f6
//https://api.rawg.io/api/games?key=YOUR_API_KEY

let dataArray = [];
let screens = [];

function fetcher() {

    fetch('https://api.rawg.io/api/games?key=879cb43fa6024d69b614737f14e041f6')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);

            dataArray = data.results;
            console.log(dataArray);

            makeGameCard(dataArray);
        })

};

function makeGameCard(data) {

    let htmlString = '';

    data.forEach(e => {

    });

    data.forEach(e => {

        let platform = [];

        e.platforms.forEach(e => {
            platform.push(` ${e.platform.name}`);
        });

        console.log(platform);

        htmlString += `
        <div class="cards">
            <h3>${e.name}</h3>
            <img src="${e.background_image}">
            <h4>Release date:</h4>
            <p class="release">${e.released}</p>
            <h4>Ratings:</h4>
            <p>${e.rating}/${e.rating_top}</p>
            <h4>Platforms:</h4>
            <p>${platform}</p>
        </div>
        `;
    });

    console.log(htmlString);

    document.getElementById('gameCard').innerHTML = htmlString;

}

fetcher();