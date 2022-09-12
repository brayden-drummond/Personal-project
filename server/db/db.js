const connection = require('./connection')

function getCharacters(db = connection) {
  return db('characters').select()
}

function deleteCharacter(id, db = connection) {
  return db('characters').select().where('id', id).delete()
}
module.exports = {
  getCharacters,
  deleteCharacter,
}
