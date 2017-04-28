const pgp = require ('pg-promise')()
const db = pgp({database: 'travel_app'})

const getDetails = () => db.any(`SELECT * FROM travel`)

const saveItinerary = (airline, hotel, budget) => db.none(`INSERT INTO travel (hotel, airline, budget) VALUES ($1, $2, $3)`, [airline, hotel, budget])

const getSuitcase = () => db.any(`SELECT * FROM suitcase ORDER BY id`)

const packSuitcase = (thing) => db.any(`INSERT INTO suitcase (item) VALUES ($1)`, [thing])

const updateSuitcase = (id, item) => db.any(`UPDATE suitcase SET item = $2 WHERE id = $1 RETURNING *`, [id, item])

const clearSuitcase = () => db.none(`DELETE * FROM suitcase`)

module.exports = { getDetails, saveItinerary, getSuitcase, packSuitcase, updateSuitcase, clearSuitcase }
