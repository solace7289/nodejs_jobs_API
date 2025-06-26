// this controller would content login and register method

// require http status codes
const { StatusCodes } = require('http-status-codes')


const register = (req, res) => {
    res.status(StatusCodes.ACCEPTED).send('register success!')
}

const login = (req, res) => {
    res.status(StatusCodes.OK).send('Login success')
}

module.exports = {
    register,
    login
}