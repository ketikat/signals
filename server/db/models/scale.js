const Sequelize = require('sequelize')
const dbInstance = require('../db')

const Scale = dbInstance.define("scale", {
    name: {
    	type: Sequelize.STRING
    },
    scale: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      defaultValue: [],
      
      get(){
        return this.getDataValue('scale').join(", ")
      }
    }
})


module.exports = Scale


