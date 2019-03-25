const express = require('express')
const router = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const config = require('config')
const port = process.env.port || config.port

router.use(bodyParser.json({}))
router.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(config.mongo_uri, { useNewUrlParser: true }, err => {
    if (!err) {
        console.log("Database connected")
    }
})


app.listen(port, err => {
    if (err) {
        console.log(`server started at port ${port}`)
    } else {
        console.log("Error.Server not started")
    }
})