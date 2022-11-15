const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 4040
require('dotenv/config')

// Routes
app.get('/', (req,res)=>{
    res.send('Hello Guys')
})
app.get('/posts', (req,res)=>{
    res.send('Hello Babes')
})
// Connect to d DB
mongoose.connect(
    process.env.DBURI
  ,
  () => {
    console.log('DB connected successfully')
  }
)
// Listening to d server
app.listen(PORT,(req,res)=>{
    console.log('Server is running on port ' + PORT);
})