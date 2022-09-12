const connection = require('./connection')

function getCharacters(db = connection) {
  return db('characters').select()
}

function deleteCharacter(id, db = connection) {
  return db('characters').select().where('id', id).delete()
}

function addCharacter(character, image, bio, theClass, db = connection) {
  return db('characters')
    .insert({ name: character, image: image, bio: bio, class: theClass })
    .then(() => getCharacters())
}
module.exports = {
  getCharacters,
  deleteCharacter,
  addCharacter,
}
