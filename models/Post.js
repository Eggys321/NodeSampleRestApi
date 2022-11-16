const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})

const POSTS = mongoose.model('singlePosts',PostSchema)

module.exports = POSTS