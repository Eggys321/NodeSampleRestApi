const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 4040
require('dotenv/config')
const postsRoutes = require('./routes/post')
const getRoutes = require('./routes/get')
app.use('/posts',postsRoutes)
app.use(getRoutes)

// Routes
// app.get('/', (req,res)=>{
//     res.send('Hello Guys')
// })
// I removed d below into d posts file dts in d routes folder and also required d routes/posts and used it inside a middleware
// app.get('/posts', (req,res)=>{
//     res.send('Hello Babes')
// })
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