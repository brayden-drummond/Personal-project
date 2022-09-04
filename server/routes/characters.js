const express = require('express')
const router = express.Router()

const db = require('../db/db')

//GET /api/v1/characters
router.get('/characters', (req, res) => {
  db.getCharacters()
    .then((characters) => {
      console.log(characters)
      res.json(characters)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
