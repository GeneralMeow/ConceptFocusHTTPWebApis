const express = require('express')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (request, response) => {
  response.render('index')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)