const express = require('express')
const router = express.Router()

const db = require('../db/db')

//GET /api/v1/dlc
router.get('/', (req, res) => {
  db.getDlc
    .then((dlc) => {
      console.log(dlc)
      res.json(dlc)
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send(err.message)
    })
})

module.exports = router
