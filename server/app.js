const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '../public')))


// the issue with react not dispalying the hello world is due to the fact
// that in the second line, i am sending back an html file. and it is 
// expecting to see  javascript. 

// If you are using an express server, then you need to make sure that you 
// serve up your index.html for any GET requests that aren't for any other routes 
// (like your /api/ routes).
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
    // res.sendStatus(200)
})

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal Server Error')
})

module.exports = app
