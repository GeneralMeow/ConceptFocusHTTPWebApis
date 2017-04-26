const pgp = require ('pg-promise')()
const db = pgp({database: 'travel_app'})

const getDetails = () => db.any(`SELECT * FROM travel`)

const saveItinerary = (airline, hotel, budget) => db.none(`INSERT INTO travel (hotel, airline, budget) VALUES ($1, $2, $3)`, [airline, hotel, budget])

module.exports = { getDetails, saveItinerary }