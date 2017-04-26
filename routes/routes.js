const express = require('express')
const router = express.Router()
const db = require('../database/database')

// get homepage
router.get('/', (request, response) => {
  response.render('index')
})

// get new-itinerary page
router.get('/new-itinerary', (request, response) => {
  response.render('new-itinerary')
})

router.post('/create-itinerary', (request, response) => {
  const {airline, hotel, budget} = request.body
    db.saveItinerary(airline, hotel, budget)
    .then(() => {
      response.redirect('itinerary')
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

module.exports = router