require('express-async-error')
// require express
const express = require('express')

// require port from config file
const { port } = require('./config.json')

// require middleware
const errorHandler = require('./middleware/error_handler')
const notFound = require('./middleware/not-found')

// require routes
const authRouter = require('./routes/authRouter')

// generate app
const app = express()

// add express json
app.use(express.json())

// basic get
app.get('/', (req, res) => {
    res.send(`<h1>NodeJS Jobs API</h1>`)
})

//use auth router
app.use('/api/auth', authRouter)

//add middleware
app.use(errorHandler)
app.use(notFound)

// start method
const start = () => {
    try {
        app.listen(port, () => {
            console.log(`App is running at: http://localhost:${port}`)
        })
    } catch (err) {
        console.log(err)

    }
}

start()













