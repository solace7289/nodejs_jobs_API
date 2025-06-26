
const errorHandler = (err, req, res, next) => {
    console.log(err)
    res.status(400).send('Something went wrong!')
}

module.exports = errorHandler





