const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/routes')

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', routes)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)

// error handling
app.use((error, request, response, next) => {
  console.error(error.stack)
  response.status(404).send("<img src='http://i68.tinypic.com/2hdo386.png' alt='404: Not Found'>")
})