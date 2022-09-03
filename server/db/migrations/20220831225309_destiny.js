exports.up = function (knex) {
  return knex.schema.createTable('destiny2', (table) => {
    table.increments('id')
    table.string('dlc')
    table.string('image')
    table.string('about')
    table.string('activities')
    table.string('review')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('destiny2')
}
