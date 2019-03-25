const dbExpense = require('../models/expense')

exports.addExpense = (req, res) => {
    if (!req.body.amount || !req.body.month || !req.body.year) {
        res.json({
            success: false,
            msg: "Please provide all the details."
        })
    } else {
        todayDate = new Date(),
            currentMonth = todayDate.getMonth(),
            currentYear = todayDate.getFullYear()
        new dbExpense({
            createdBy: req.decoded.email,
            createdAt: new Date(),
            amount: req.body.amount,
            month: currentMonth,
            year: currentYear,
            details: req.body.details,
            expenseType: req.body.expenseType,
            status: 0
        }).save((err, saveData) => {
            if (err) {
                res.json({
                    success: false,
                    msg: "Something went wrong."
                })
            } else {
                res.json({
                    success: true,
                    msg: "New expense added."
                })
            }
        })
    }
}