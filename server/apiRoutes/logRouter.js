const logsRouter = require('express').Router()
const { User, Log, Entry, Scale } = require('../db/models')


logsRouter.get('/', (req, res, next) => {
  Scale.findAll()
  .then((logs) => res.json(logs))
  .catch(next)
})

logsRouter.get('/:id', (req, res, next) => { 
  Scale.findById(req.params.id)
  .then((scale) => {
      if (scale){res.json(scale)}
      else{res.status(404).send(`no scale with the id ${req.params.scaleId} found`)}
  })
  .catch(next)
})

logsRouter.post('/', (req, res, next) => {
  Scale.create(req.body)
  .then((scale) => {
      res.status(201).send(scale)
  })
  .catch(next)
})

logsRouter.put('/:id', (req, res, next) => { 
  Scale.findById(req.params.id)
  .then(scale => {
      if(scale) {scale.update(req.body)}
      else {res.status(404).send(`no scale with the id ${req.params.scaleId} found`)}
  })
  .catch(next)
})

logsRouter.delete('/:id', (req, res, next) => {
  Scale.findById(req.params.id)
  .then(scale => {
      if (scale) {scale.destroy()}
      else {res.status(404).send(`no scale with the id ${req.params.scaleId} found`)} 
      // do i have a hook to delete all scale's logs and entries and scale. 
  })
  .catch(next)
})

module.exports = logsRouter