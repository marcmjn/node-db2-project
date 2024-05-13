exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.text('vin', 17).unique().notNullable()
    tbl.text('make',50).notNullable()
    tbl.text('model',50).notNullable()
    tbl.integer('mileage').notNullable()
    tbl.text('title', 25)
    tbl.text('transmission', 25)
  })
};

exports.down = function (knex) {
 return knex.schema.dropTableIfExists('cars')
};
