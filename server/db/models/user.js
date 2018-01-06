const Sequelize = require('sequelize')
const dbInstance = require('../db')

const User = dbInstance.define("user", {
  name: {
  	type: Sequelize.STRING, 
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING, 
  	allowNull: false, 
	  isUnique :true,
    validate:{
               isEmail : true
            }
  },
  password: {
  	type: Sequelize.STRING, 
    allowNull: false
  }
  // ,
  // name:{
  // 	type: Sequelize.VIRTUAL, 
  // 	get(){
  // 		return (this.firstName + " " + this.lastName)
  // 	}
  // }

})


module.exports = User
