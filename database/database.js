const pgp = require ('pg-promise')()
const db = pgp({database: 'travel_app'})

const getDetails = () => db.any(`SELECT * FROM travel`)

const saveItinerary = (airline, hotel, budget) => db.none(`INSERT INTO travel (hotel, airline, budget) VALUES ($1, $2, $3)`, [airline, hotel, budget])

const getSuitcase = () => db.any(`SELECT * FROM suitcase ORDER BY id`)

const updateSuitcase = (id, item) => db.any(`UPDATE suitcase SET item = $2 WHERE id = $1 RETURNING *`, [id, item])

module.exports = { getDetails, saveItinerary, getSuitcase, updateSuitcase }
