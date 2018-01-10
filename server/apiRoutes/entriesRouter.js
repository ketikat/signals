const scalesRouter = require('express').Router()
const { User, Log, Entry, Scale } = require('../db/models')


scalesRouter.get('/', (req, res, next) => {
  Scale.findAll()
  .then((scales) => res.json(scales))
  .catch(next)
})

scalesRouter.get('/:id', (req, res, next) => { 
  Scale.findById(req.params.id)
  .then((scale) => {
      if (scale){res.json(scale)}
      else{res.status(404).send(`no scale with the id ${req.params.scaleId} found`)}
  })
  .catch(next)
})

scalesRouter.post('/', (req, res, next) => {
  Scale.create(req.body)
  .then((scale) => {
      res.status(201).send(scale)
  })
  .catch(next)
})

scalesRouter.put('/:id', (req, res, next) => { 
  Scale.findById(req.params.id)
  .then(scale => {
      if(scale) {scale.update(req.body)}
      else {res.status(404).send(`no scale with the id ${req.params.scaleId} found`)}
  })
  .catch(next)
})

scalesRouter.delete('/:id', (req, res, next) => {
  Scale.findById(req.params.id)
  .then(scale => {
      if (scale) {scale.destroy()}
      else {res.status(404).send(`no scale with the id ${req.params.scaleId} found`)} 
      // do i have a hook to delete all scale's logs and entries and scale. 
  })
  .catch(next)
})

module.exports = scalesRouter