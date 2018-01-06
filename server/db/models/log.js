const Sequelize = require('sequelize')
const dbInstance = require('../db')

const Log = dbInstance.define("log", {
    name: {
    	type: Sequelize.STRING,
    	allowNull: false
    }
})


module.exports = Log
