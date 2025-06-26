// router for authentication (login, register)

const express = require('express')

const router = express.Router()

// require method from controller
const { register, login } = require('../controller/auth')

// use
router.post('/register', register)
router.post('/login', login)

module.exports = router



