
const users = [
	{
	  name: 'kat',
	  email: 'kb@gmail.com',
	  password: 'bacon'
	},
	{
	  name: 'bunbun',
	  email: 'bb@gmail.com',
	  password: 'tpol'
	},
	{
	  name: 'toshi',
	  email: 'tw@gmail.com',
	  password: 'autos'
	}
]

const logs = [
	{name:"kat's mood log",
	scaleId: 1, 
	user_id: 1}, //1

	{name:"kat's transportation log",
	scaleId: 2, 
	user_id: 1}, //2

	{name:"kat's phone log",
	scaleId: 2, 
	user_id: 1}, //3

	{name:"dina's mood log",
	scaleId: 1, 
	user_id: 2}, //4

	{name:"dina's migrane log",
	scaleId: 2, 
	user_id: 2}, //5

	{name:"dina's caffeine log",
	scaleId: 2, 
	user_id: 2}, //6

	{name:"toshi's mood log",
	scaleId: 1, 
	user_id: 3}, //7

	{name:"toshi's hustle log",
	scaleId: 2, 
	user_id: 3}, //8
]

const entries = [
	{
	value: 5,
	createdAt: "2017-09-25 14:35:06.269-10",
	scaleId: 1,
	log_id: 2,
	user_id: 1
	}
]

const scales= [
	{name: "one-to-five", 
	scale: [1,2,3,4,5]},


	{name: "minutes", 
	scale: 	[5,10,15,20,25,30,45,60,90,120,150,180,240,270,300,330,360,390]}

]
	


// ----end-of-seeding-info----------------------------------------------

console.log('FROM INSIDE SEED.JS')

const { db, User, Log, Scale, Entry } = require('./server/db/models/index.js')
  


db.sync({force: true})
  .then( () => {
    console.log('seeding file in action...')
    console.log('---------------')
	 	 users.map( (user)=>{
			return User.create(user)
	    })
	 })
  	.then (()=>{
		scales.map( (scale)=>{
			return Scale.create(scale)
    	})
	})
    .then (()=>{
		logs.map( (log)=>{
			return Log.create(log)
    	})
	})
	.then (()=>{
		entries.map( (entry)=>{
			return Entry.create(entry)
    	})
	})
	

.then(()=> {console.log('done seeding!') ; console.log('---------------')})
// .then(() => db.close())
.catch(err=>(console.log(err)))
  
   


