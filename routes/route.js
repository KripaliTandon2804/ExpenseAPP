const express = require('express')
const router = express.Router()
const verify = require('./tokenVerify')

/**
 * Register using email 
 */
const register = require('./registeration')
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
router.post('/addExpense', verify, addExpense)

/**
 * Edit Expense
 */
const editExpense = require('./editExpense')
router.post('/editExpense', verify, editExpense)

/**
 * Delete Expense
 */
const deleteExpense = require('./deleteExpense')
router.post('/deleteExpense', verify, deleteExpense)

/**
 * Get Expense
 */
const getExpense = require('./getExpense')
router.post('/getExpense', verify, getExpense)


module.exports = router;