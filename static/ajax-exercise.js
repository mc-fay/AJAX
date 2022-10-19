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

  // const queryString = new URLSearchParams({ zipcode: zipcode }).toString();
  // const url2 = '/weather.json?${queryString}'; // Why does this not work? 

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch(`/weather.json?zipcode=${zipcode}`)
    // .then(console.log('Checkpoint1'))
    .then((response) => response.json())
    // .then(console.log(response.json))
    .then((forecastData) => document.querySelector('#weather-info')
      .innerText = forecastData['forecast'])
    // .then(console.log(forecast))
    // .then((forecast) => {
    //   document.querySelector('#weather-info').innerText = forecast;
    //   });
}

// forecastData[key] = value 
// {'forecast': 'Warm, balmy, and good for sunbathing.', 'temp': '100F'}
// 'forecast'
// 'temp'

// From lecture
// const button = document.querySelector('#update-status');

// button.addEventListener('click', () => {
//   const queryString = new URLSearchParams({ order: 123 }).toString();
//   // you could also hard code url to '/status?order=123' // '/?zipcode=99507'
//   const url = `/status?${queryString}`;

//   fetch(url)
//     .then((response) => response.text())
//     .then((status) => {
//       document.querySelector('#order-status').innerHTML = status;
//     });
// });
// End from lecture 

// weatherDictionary[zipcode]['forecast']) // define weatherDictionary? 

document.querySelector('#weather-form').addEventListener('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  
  
  
  // example from lecture notes
  const formInputs = {
    melon_type: document.querySelector('#melon-type-field').value,
    qty: document.querySelector('#qty-field').value,
  };

  fetch('/order-melons.json', {
    method: 'POST',
    body: JSON.stringify(formInputs),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      document.querySelector('#order-status').innerText = responseJson['msg'];
    //   alert(responseJson.status);
    // });
});

  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
