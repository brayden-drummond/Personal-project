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

//add
router.post('/', (req, res) => {
  console.log(req.body)
  const { newCharacter } = req.body
  db.addCharacter(newCharacter)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

//del
router.post('/', (req, res) => {
  const character = req.body
  console.log(character)
  db.deleteCharacter(character)
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).json({ message: 'Something went wrong' })
    })
})
module.exports = router
