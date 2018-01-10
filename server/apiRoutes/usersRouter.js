const usersRouter = require('express').Router()
const { User, Log, Entry, Scale } = require('../db/models')


usersRouter.get('/', (req, res, next) => {
  User.findAll()
  .then((users) => res.json(users))
  .catch(next)
})

usersRouter.get('/:id', (req, res, next) => { 
  User.findById(req.params.id)
  .then((user) => {
      if (user){res.json(user)}
      else{res.status(404).send(`no user with the id ${req.params.userId} found`)}
  })
  .catch(next)
})

usersRouter.post('/', (req, res, next) => {
  User.create(req.body)
  .then((user) => {
      res.status(201).send(user)
  })
  .catch(next)
})

usersRouter.put('/:id', (req, res, next) => { 
  User.findById(req.params.id)
  .then(user => {
      if(user) {user.update(req.body)}
      else {res.status(404).send(`no user with the id ${req.params.userId} found`)}
  })
  .catch(next)
})

usersRouter.delete('/:id', (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
      if (user) {user.destroy()}
        // do i have a hook to delete all user's logs and entries and scale. 
      else {res.status(404).send(`no user with the id ${req.params.campusId} found`)} 
  })
  .catch(next)
})

// what other routes do i need in here? 
module.exports = usersRouter


