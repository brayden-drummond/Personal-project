const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDlc,
}

function getDlc(db = connection) {
  return db('destiny2').select()
}
