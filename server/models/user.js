const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username : {
        type: String,
    },
    email : {
        type: String,
    },
    password : {
        type: String,
    }
})


const user = mongoose.model('User', userSchema)
module.exports = user