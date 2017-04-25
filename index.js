const express = require('express')
const path = require('path')
const app = express()

app.get('/', (request, response) => {
  response.send('ET go home')
})

app.listen(3000)