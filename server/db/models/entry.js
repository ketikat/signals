const Sequelize = require('sequelize')
const dbInstance = require('../db')

const Entry = dbInstance.define("entry", {
    value: {
    	type: Sequelize.INTEGER,
    	allowNull: false
    } 
})


module.exports = Entry
