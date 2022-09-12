const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getCharacters()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

router.post('/', (req, res) => {
  const character = req.body.newCharacter
  db.addCharacter(character)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//pass in delete function

module.exports = router
