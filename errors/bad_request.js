
const { StatusCodes } = require('http-status-codes')

const CustomeAPIError = require('./custome_error')

class BadRequestError extends CustomeAPIError {
    constructor(message) {
        super(message)
        this.status = StatusCodes.BAD_REQUEST
    }
}

module.exports = BadRequestError

