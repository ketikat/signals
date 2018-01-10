
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

	{name:"t-dubs' mood log",
	scaleId: 1, 
	user_id: 3}, //7

	{name:"t-dubs' hustle log",
	scaleId: 2, 
	user_id: 3}, //8
]


const scales= [
	{name: "one-to-five", 
	scale: [1,2,3,4,5]},


	{name: "minutes", 
	scale: 	[5,10,15,20,25,30,45,60,90,120,150,180,240,270,300,330,360,390]}

]



const entries = [

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% START of T's MOODS LOG (7) %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
	{
	value: 5,
	createdAt: "2017-09-02 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 5,
	createdAt: "2017-09-03 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 3,
	createdAt: "2017-09-04 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 3,
	createdAt: "2017-09-05 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 1,
	createdAt: "2017-09-07 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 2,
	createdAt: "2017-09-08 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 1,
	createdAt: "2017-09-09 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 2,
	createdAt: "2017-09-10 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
		{
	value: 1,
	createdAt: "2017-09-12 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 5,
	createdAt: "2017-09-14 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 4,
	createdAt: "2017-09-15 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 5,
	createdAt: "2017-09-16 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 3,
	createdAt: "2017-09-16 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 1,
	createdAt: "2017-09-17 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 2,
	createdAt: "2017-09-18 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 1,
	createdAt: "2017-09-19 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 2,
	createdAt: "2017-09-21 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
		{
	value: 1,
	createdAt: "2017-09-21 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 5,
	createdAt: "2017-09-22 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 4,
	createdAt: "2017-09-23 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 5,
	createdAt: "2017-09-25 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 4,
	createdAt: "2017-09-26 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 3,
	createdAt: "2017-09-27 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 3,
	createdAt: "2017-09-28 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 3,
	createdAt: "2017-09-29 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 4,
	createdAt: "2017-09-30 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	},
// ]
// %%%%%%%%%%%%%%%%%%%%%%%%%% END of T's MOODS LOG %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% START of T's HUSTLE LOG (8) %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% 
	{
	value: 30,
	createdAt: "2017-09-04 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 20,
	createdAt: "2017-09-05 15:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 35,
	createdAt: "2017-09-07 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 90,
	createdAt: "2017-09-08 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 120,
	createdAt: "2017-09-09 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 20,
	createdAt: "2017-09-10 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 30,
	createdAt: "2017-09-12 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 10,
	createdAt: "2017-09-15 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 45,
	createdAt: "2017-09-16 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 45,
	createdAt: "2017-09-19 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 60,
	createdAt: "2017-09-21 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 45,
	createdAt: "2017-09-22 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 20,
	createdAt: "2017-09-23 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 10,
	createdAt: "2017-09-28 14:35:06.269-10",
	scaleId: 1,
	log_id: 7,
	user_id: 3
	}, 
	{
	value: 10,
	createdAt: "2017-09-29 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}, 
	{
	value: 10,
	createdAt: "2017-09-30 14:35:06.269-10",
	scaleId: 1,
	log_id: 8,
	user_id: 3
	}
]
// %%%%%%%%%%%%%%%%%%%%%%%%%% END of T's HUSTLE LOG %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


	


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
  
   


