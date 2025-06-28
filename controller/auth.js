// this controller would content login and register method

// require http status codes
const { StatusCodes } = require('http-status-codes')

// require custome error
const { Unauthenticated, BadRequestError } = require('../errors')


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

const login = async (req, res) => {

    // get username and password from req.body
    const { email, password } = req.body

    // validate username and password
    if ( !email || !password ) {
        throw new BadRequestError('Please provide email and password!') 
    }
    // find one by username
    const user = await User.findOne({ email })
    
    // if user not exist -> throw exception
    if (!user) {
        throw new Unauthenticated('User not exist!')
    }

    // compare password
    const isPasswordCorrect = await user.comparePassword(password)
    
    // if wrong -> send back message: login fail, wrong password
    if ( !isPasswordCorrect ) {
        console.log('Password is wrong')
        throw new Unauthenticated('Wrong password')
    } else {
        // if true -> create token
        const token = user.createToken()
        
        // send back to user
        res.status(StatusCodes.OK).json({
            token
        })
    }
}

module.exports = {
    register,
    login
}