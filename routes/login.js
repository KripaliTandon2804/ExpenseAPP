var dbRegister = require('../models/register')
const jwt = require('jsonwebtoken')

exports.login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        res.json({
            success: false,
            msg: "Please enter all the details."
        })
    } else {
        dbRegister.findOne({ email: req.body.email }, (err, userData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Please enter the correct details."
                })
            } else if (!userData || userData == null) {
                res.json({
                    success: false,
                    msg: " User doesn't exist."
                })
            } else if (userData.password != req.body.password) {
                res.json({
                    success: false,
                    msg: "Please enter the correct password."
                })
            } else {
                var token = jwt.sign({
                    email: userData.email,
                    name: userData.name,
                    id: userData._id
                }, req.app.get('secretKey'))
                res.json({
                    success: true,
                    msg: "Login successful.",
                    token: token,
                    name: userData.name
                })

            }
        })
    }
}