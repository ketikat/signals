'use strict'

const db = require('../db.js') 
const chalk = require('chalk')

// Requiring all the models
const User = require('./user')
const Log = require('./log')
const Scale = require('./scale')
const Entry = require('./entry')

// Associations
User.belongsToMany(Scale, {through: "UsersScales"})
Entry.belongsToMany(Log, {through: "EntriesLogs"})

// Log.belongsTo(User)
Log.belongsTo(Scale)
Entry.belongsTo(Scale)

User.hasMany(Log, {
  foreignKey: 'user_id',
  onDelete: 'cascade', // remove all associated logs
  hooks: true // makes the cascade actually work. 
})

Log.hasMany(Entry, {
  foreignKey: 'log_id',
  onDelete: 'cascade', // remove all associated logs
  hooks: true // makes the cascade actually work. 
})

User.hasMany(Entry, {
  foreignKey: 'user_id',
  onDelete: 'cascade', // remove all associated logs
  hooks: true // makes the cascade actually work. 
})


module.exports = {
	db, 
	User, 
	Log, 
	Scale, 
	Entry
}