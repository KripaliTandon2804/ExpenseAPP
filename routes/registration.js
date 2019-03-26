var dbRegister = require('../models/register')

exports.register = (req, res) => {
    if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.password || !req.body.phone) {
        res.json({
            success: false,
            msg: "Please enter all the details."
        })
    } else {
        dbRegister.findOne({ email: req.body.email }, (err, loginData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Error.Please try after sometime."
                })
            } else if (!loginData || loginData == null) {
                new dbRegister({
                    email: req.body.email,
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    phone: req.body.phone,
                    password: req.body.password
                }).save((err, savedLogin) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Error Occurred"
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Successfully registered."
                        })
                    }
                })

            } else {
                dbRegister.findOneAndUpdate({ email: req.body.email }, { password: req.body.password, firstName: req.body.firstName, lastName: req.body.lastName, phone: req.body.phone }, (err, loginData) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: "Something went wrong."
                        })
                    } else {
                        res.json({
                            success: true,
                            msg: "Registration Done."
                        })
                    }
                })
            }
        })
    }
}