// this controller would content login and register method

// require http status codes
const { StatusCodes } = require('http-status-codes')

// require model User
const User = require('../models/User')

// register method
const register = async (req, res) => {
    // get: username, email and password from req.body
    const { username, email, password } = req.body

    // call create new user method from model User
    const user = await User.create( req.body ) 
    // call method: create token to get a new token
    const token = await user.createToken()
    console.log(`Test generate token: ${token}`);
    
    // send back username and token to user
    res.status(StatusCodes.ACCEPTED).json({
        user: { username: user.username },
        token: token
    })
}

const login = (req, res) => {
    res.status(StatusCodes.OK).send('Login success')
}

module.exports = {
    register,
    login
}