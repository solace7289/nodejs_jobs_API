
const { StatusCodes } = require('http-status-codes')
const { CustomeAPIError } = require('../errors')

const errorHandler = (err, req, res, next) => {
    console.log(err)
    if (err instanceof CustomeAPIError ) {
        return res.status(err.status).json({ "message": err.message })
    } else {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Something went wrong!')
    }
}

module.exports = errorHandler





