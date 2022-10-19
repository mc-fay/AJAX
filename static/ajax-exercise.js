'use strict';

// PART 1: SHOW A FORTUNE

function showFortune(evt) {
  // TODO: get the fortune and show it in the #fortune-text div
  fetch('/fortune')
  .then((response) => response.text())
  .then((newFortune) => {
    document.querySelector('#fortune-text').innerText = newFortune;
  });
}

document.querySelector('#get-fortune-button').addEventListener('click', showFortune);

// fetch('/adjective')
//   .then((response) => response.text())
//   .then((serverData) => {
//     console.log('this will be logged second');
//     document.querySelector('#adjective').innerText = serverData;
//   });
// console.log('this will be logged first');

// PART 2: SHOW WEATHER

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  const queryString = new URLSearchParams({ "#zipcode-field": zipcode }).toString();
  const url2 = '/weather.json?${queryString}';

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`/weather.json${zipcode}`)
  .then(console.log('Checkpoint1'))
  .then((response) => response.json())
  .then(console.log(response.json))
  .then(forecast = weatherDictionary[zipcode]['forecast']) // define weatherDictionary?
  .then(console.log(forecast))
  .then((forecast) => {
    document.querySelector('#weather-info').innerText = forecast;
    });
}

// From lecture
const button = document.querySelector('#update-status');

button.addEventListener('click', () => {
  const queryString = new URLSearchParams({ order: 123 }).toString();
  // you could also hard code url to '/status?order=123' // '/?zipcode=99507'
  const url = `/status?${queryString}`;

  fetch(url)
    .then((response) => response.text())
    .then((status) => {
      document.querySelector('#order-status').innerHTML = status;
    });
});
// End from lecture 

document.querySelector('#weather-form').addEventListener('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
