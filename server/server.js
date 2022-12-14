const path = require('path')
const express = require('express')
// const cors = require('cors')

const characters = require('./routes/characters')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))
// server.use(cors('*'))

server.use('/api/v1/characters', characters)

// server.get('*', (req, res) => {
//   console.log('server hit!')
//   res.sendFile(path.resolve('server/public/index.html'))
// })

module.exports = server
