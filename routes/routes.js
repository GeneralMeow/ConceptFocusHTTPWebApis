const express = require('express')
const router = express.Router()
const db = require('../database/database')
require('es6-promise').polyfill();
require('isomorphic-fetch');

// get homepage
router.get('/', (request, response) => {
  response.render('index')
  .then(() => {
    response.status(200)
  })
})

// get new-itinerary page
router.get('/new-itinerary', (request, response) => {
  response.render('new-itinerary')
})

//create new-itinerary
router.post('/create-itinerary', (request, response, next) => {
  const {airline, hotel, budget} = request.body
    db.saveItinerary(airline, hotel, budget)
    .then(() => {
      response.redirect(201, 'itinerary')
    })
    .catch((error) => {
      return next(error)
    })
})

// get existing itinerary
router.get('/itinerary', (request, response) => {
  Promise.all([db.getDetails(), fetchWeather()])
  // db.getDetails()
  .then( (values) => {
    response.render('itinerary', {values})
  })
})

//get packing list
router.get('/edit', (request, response) => {
  response.render('edit')
})

router.get('/contact', (request, response) => {
  response.status(403).send("<div>Error 403: You are not authorized to contact this organization.</div>")
})

router.get('/about', (request, response) => {
  response.status(301).send("<div>Error 301: Organization information has been moved to the dark side of the moon. Please turn on sound to hear a message from our sponsors!</div>")
})

router.get('/404', (request, response) => {
  response.render('404')
})

const fetchWeather = () => {
  const fetchUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=2154624&APPID=253e1c4d472cec6a63788025b1f71efb'
  return fetch(fetchUrl)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
      }
      // Examine the text in the response
      return response.json()
        .then(function(data) {
          const weather = data.list[0].weather
          return weather
          // console.log(weather);
        })
      }
    )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}

module.exports = router
