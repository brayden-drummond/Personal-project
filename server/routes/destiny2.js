const express = require('express')
const router = express.Router()

const db = require('../db/db')

//GET /api/v1/dlc
router.get('/', (req, res) => {
  db.getDlc
    .then((dlc) => {
      res.json(dlc)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
