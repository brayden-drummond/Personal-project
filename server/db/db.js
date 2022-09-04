const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getCharacters,
}

function getCharacters(db = connection) {
  return db('characters').select()
}
