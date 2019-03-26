const express = require('express')
const router = express.Router()
const verify = require('./tokenVerify')

/**
 * Register using email 
 */
const register = require('./registration')
router.post('/register', register.register)

/**
 * Login using email
 */
const login = require('./login')
router.post('/login', login.login)

/**
 * Set Monthly Limit
 */
const setLimit = require('./setLimit')
router.post('/setLimit', verify, setLimit.setLimit)


/**
 * Total Expenditure
 */
const totalExpenditure = require('./totalExpenditure')
router.get('/totalExpenditure', verify, totalExpenditure.totalExpenditure)

/**
 * Add expense
 */
const addExpense = require('./addExpense')
router.post('/addExpense', verify, addExpense.addExpense)

/**
 * Edit Expense
 */
const editExpense = require('./editExpense')
router.post('/editExpense', verify, editExpense.editExpense)

/**
 * Delete Expense
 */
const deleteExpense = require('./deleteExpense')
router.post('/deleteExpense', verify, deleteExpense.deleteExpense)

/**
 * Get Expense
 */
const getExpense = require('./getExpense')
router.post('/getExpense', verify, getExpense.getExpense)


module.exports = router;