const express = require('express')
const router = express.Router()
const db = require('../database/database')

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
  db.getDetails()
  .then((details) => response.render('itinerary', {details}))
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

module.exports = router