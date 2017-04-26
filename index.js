const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes/routes')

app.set('view engine', 'pug')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', routes)
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)