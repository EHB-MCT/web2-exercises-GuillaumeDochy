'use strict';

let runtime = 0;

window.onload = function () {
    document.getElementById('searchform').addEventListener('submit', e => {
        e.preventDefault();

        let title = document.getElementById('inputTitle').value;
        let year = document.getElementById('inputYear').value;

        fetch(`http://www.omdbapi.com/?t=${title}&y=${year}&apikey=95ffe85c`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                let card = document.getElementById('card');
                let htmlString = '';
                htmlString += `<div class="row no-gutters">
                <div class="col-md-4" id="image">
                    <img src="${data.Poster}" class="card-img" alt="img">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${data.Title}</h5>
                        <p class="card-text">${data.Plot}</p>
                        <p class="card-text"><small class="text-muted">Duration: ${data.Runtime}</small></p>
                        <button id="runtimeAdd">+</button>
                    </div>
                </div>
            </div>`;
                card.innerHTML = htmlString;
                document.getElementById('runtimeAdd').addEventListener('click',
                    e => {
                        e.preventDefault();
                        runtimeCounter(data.Runtime);
                    });
            })
    });
};

function runtimeCounter(runtimeString) {
    let time = parseInt(runtimeString);
    runtime += time;
    document.getElementById('runtimeCounter').innerHTML = `${runtime} min`
}