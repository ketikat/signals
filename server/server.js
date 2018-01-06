'use strict'

const server = require('./app.js')
const {db}  = require('./db/models/index.js')
// const db  = require('./db/db.js')
const PORT = 1776
const chalk = require('chalk')

// db.sync({force:true})
db.sync()
  .then(() => {
    console.log(chalk.yellow('The postgres server is up and running'))
		server.listen(PORT, (err) => {
		  if (err) throw err
		  console.log(chalk.yellow(`Your server kindly awaits your attention on port ${PORT}`))
	  })
	})
	.catch(console.error)



// WHICH ONE????? THEY SEEM TO DO THE SAME THING?
  // "main": "webpack.config.js",
  // "main": "main.js",