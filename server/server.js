const path = require('path')
const express = require('express')
const cors = require('cors')

const dlc = require('./routes/destiny2')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors('*'))

server.get('*', (req, res) => {
  console.log('server hit!')
  res.sendFile(path.resolve('server/public/index.html'))
})

server.use('/api/v1/dlc', dlc)

module.exports = server
