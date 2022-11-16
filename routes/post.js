const express = require('express')
const router = express.Router()
const POSTS = require('../models/Post')

router.get('/', (req, res) => {
  res.send('Hello Babes')
})

router.post('/', (req, res) => {
  console.log(req.body)
})

module.exports = router
