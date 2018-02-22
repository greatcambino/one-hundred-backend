const express = require('express')
const mongoose = require('../db/connection')

const Drabble = mongoose.model('Drabble')
const Router = express.Router()


Router.get('/', (req, res) => {
    Drabble
      .find({})
      .then(drabbles => res.json(drabbles))
  })
  
  Router.get('/:title', (req, res) => {
    Drabble
      .findOne({title: req.params.title})
      .then(drabble => res.json(drabble))
  })

  Router.post('/', (req, res) => {
    Drabble
      .create(req.body)
      .then(drabbles => res.json(drabbles))
  })

  Router.put("/:title", (req, res) => {
    Drabble
      .findOneAndUpdate({ title: req.params.title }, req.body)
      .then(drabble => res.json(drabble))
  })

  Router.delete("/:title", (req, res) => {
    Drabble
      .findOneAndRemove({ title: req.params.title })
      .then(drabble => res.json(drabble))
  })




module.exports = Router