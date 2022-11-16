const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  res.send('Hello Guys')
})

module.exports = routes