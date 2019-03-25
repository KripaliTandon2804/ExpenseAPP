const mongoose = require('mongoose')
const Schema = mongoose.Schema

const expense = new Schema({
    createdBy: String,
    createdAt: Date,
    month: Number,
    year: Number,
    details: String,
    amount: Number,
    paymentType: {
        type: String,
        enum: ['credit', 'debit']
    },
    status: Number
})

module.exports = mongoose.model("expense", expense)