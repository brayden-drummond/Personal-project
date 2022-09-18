const connection = require('./connection')

function getCharacters(db = connection) {
  return db('characters').select()
}

function deleteCharacter(id, db = connection) {
  return db('characters').delete().where('id', id)
}

function addCharacter(newCharacter, db = connection) {
  return db('characters').insert(newCharacter)
  // .then(() => getCharacters())
}
module.exports = {
  getCharacters,
  deleteCharacter,
  addCharacter,
}
