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

//pass in delete function
// router.post('/', (req, res) => {
//   const id = req.body.id
//   db.deleteCharacter(id)
//     .then((results) => {
//       res.json(results)
//     })
//     .catch((err) => {
//       console.error(err.message)
//       res.status(500).json({ message: 'Something went wrong' })
//     })
// })
module.exports = router
