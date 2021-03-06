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

router.put('/itinerary/:id', (request, response, next) => {
  const {item} = request.body
  const {id} = request.params
  db.updateSuitcase(id, item)
  .then(() => {
    response.sendStatus(201)
  })
  .catch((error) => {
    return next(error)
  })
})

// get existing itinerary
router.get('/itinerary', (request, response) => {
  Promise.all([db.getDetails(), fetchWeather(), db.getSuitcase()])
  .then( (values) => {
    response.render('itinerary', {values})
  })
})

// packing list routes
router.post('/pack', (request, response) => {
  const {thing} = request.body
  db.packSuitcase(thing)
  .then(() => {
    response.redirect('/itinerary')
  })
})

router.get('/clear', (request, response) => {
    response.status(400).send("<img src='https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia0.giphy.com%2Fmedia%2FdLw7QgAC3nE2I%2Fgiphy-downsized.gif' alt='400: Bad Request'>")
})

router.delete('/clear', (request, response) => {
  db.clearSuitcase()
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

router.get('/500', (request, response) => {
  response.status(500).send("<img src='https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia2.giphy.com%2Fmedia%2F22u0JK3ZOtkuk%2Fgiphy-downsized.gif' alt='It's not you, it's us (but mostly you)'>")
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
