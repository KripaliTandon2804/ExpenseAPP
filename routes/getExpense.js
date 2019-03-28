const dbExpense = require('../models/expense')
const moment = require('moment')
const day = moment().format('DD')
const month = moment().format('MM')
const year = moment().format('YY')

exports.getExpense = (req, res) => {
    var query = { $and: [{ createdBy: req.decoded.email }, { status: { $ne: -1 } }] }
    if (req.body.startDate && req.body.endDate) {
        var gt, lt;
        if (req.body.startDate == req.body.endDate) {
            var d = new Date(req.body.startDate)
            gt = moment(d).format("YYYY-MM-DD") //new Date(req.body.startDate)
            lt = new Date(gt.getFullYear(), gt.getMonth(), gt.getDate() + 1)
        } else {
            g = new Date(req.body.startDate);

            console.log(g)
            gt = new Date(moment(req.body.startDate, 'YYYY-MM-DD'))
            l = req.body.endDate
            lt = new Date(moment(req.body.endDate, 'YYYY-MM-DD'))
        }
        query.$and.push({
            'createdAt': { "$gte": gt, "$lte": lt }
        })
    } else if (req.body.endDate) {
        var end = new Date()
        var momentDate = moment(end)
        var start = new Date(momentDate.getFullYear(), momentDate.getMonth(), momentDate.getDate() - 90)
        var ltee = req.body.endDate
        var lte = moment(ltee).format("YYYY-MM-DD")
        query.$and.push({
            'createdAt': { "$gte": start, "$lte": lte }
        })
    } else if (req.body.startDate) {
        var gtee = req.body.startDate
        var gte = moment(gtee).format("YYYY-MM-DD")
        query.$and.push({
            'createdAt': { "$gte": gte }
        })
    }
    console.log(JSON.stringify(query))
    dbExpense.find(query, (err, expenses) => {
        if (err) {
            // console.log(err)
            res.json({
                success: false,
                msg: "Error Occured."
            })
        } else if (!expenses || expenses.length == 0) {
            res.json({
                success: false,
                msg: "No expenses found"
            })
        } else {
            res.json({
                success: true,
                msg: "All expenses.",
                expenses: expenses
            })
        }
    })
}