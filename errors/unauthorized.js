
// require http status code
const { StatusCodes } = require('http-status-codes')
const CustomeAPIError = require('./custome_error')


class Unauthenticated extends CustomeAPIError {
    constructor (message) {
        super(message)
        this.status = StatusCodes.UNAUTHORIZED
    }
}

// export
module.exports = Unauthenticated





