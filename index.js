
// require express
const express = require('express')

// require port from config file
const { port } = require('./config.json')

// generate app
const app = express()

// basic get
app.get('/', (req, res) => {
    res.send(`<h1>NodeJS Jobs API</h1>`)
})

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













