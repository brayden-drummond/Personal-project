exports.up = function (knex) {
  return knex.schema.createTable('destiny', (table) => {
    table.increments('id')
    table.string('code')
    table.string('game')
    table.string('dlcName')
    table.string('image')
    table.string('about')
    table.string('activities')
    table.string('review')
  })
}

exports.down = function (knex) {
  return knex.schema.alterTable('destiny2')
}
