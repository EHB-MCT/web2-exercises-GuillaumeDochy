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
    let screensHtml = '';
    let screen = data.short_screenshots;
    /*
        screen.forEach(e => {
            screensHtml += `
            <img src="${screen.e}">
            `;
        });
    */
    data.forEach(e => {
        htmlString += `
        <p>${e.name}</p>
        ${screensHtml}
        `;
    });

    console.log(htmlString);

    document.getElementById('gameCard').innerHTML = htmlString;

}

fetcher();