const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const register = new Schema({
    email: {
        unique: true,
        type: String
    },
    firstName: String,
    lastName: String,
    phone: Number,
    password: String,
    lastLogin: [Date]
})

module.exports = mongoose.model("Register", register)