const dbExpense = require('../models/expense')

exports.deleteExpense = (req, res) => {
    if (!req.body.id) {
        res.json({
            success: false,
            msg: "Please enter the value."
        })
    } else {
        dbExpense.deleteOne({ _id: req.body.id }, (err, deleted) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } else {
                res.json({
                    success: true,
                    msg: "Expense Deleted."
                })
            }
        })
    }
}