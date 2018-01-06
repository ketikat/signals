'use strict'
const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(' ')
console.log(chalk.yellow("Opening database connection"))


// This is the OG and only database instance, it can be used in other files.
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false, // so we don't see extra shit
})


module.exports = db





// BoilerNotes this might apply later on????:
// don't forget to run our models files and make all associations for our Sequelize objects 
// (if you do it here consider circular references)
