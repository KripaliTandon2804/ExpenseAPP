const dbExpense = require('../models/expense')

exports.editExpense = (req, res) => {
    if (!req.body.amount || !req.body.details || !req.body.expenseType || !req.body.id) {
        res.json({
            success: false,
            msg: "Please provide all the details."
        })
    } else {
        var ex = {
            details: req.body.details,
            amount: req.body.amount,
            expenseType: req.body.expenseType
        }
        dbExpense.findOneAndUpdate({ _id: req.body.id }, { $set: ex }, (err, saved) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Server error."
                })
            } else {
                res.json({
                    success: true,
                    msg: "Expense Updated."
                })
            }
        })
    }
}