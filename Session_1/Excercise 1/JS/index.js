'use strict';

window.onload = function () {
    console.log('window loaded');
    console.log('form init');
    let name = document.getElementById('name').value;
    let mail = document.getElementById('mail').value;
    let order = document.getElementById('order').value;
    document.getElementById('form').addEventListener('submit', submitForm());

    function submitForm() {
        let htmlString = `<p>The order for the customer ${name} is the following: ${order}. The customer may be notified by email: ${mail}`;
        document.getElementById('confirm').innerHTML = htmlString;
    }
};