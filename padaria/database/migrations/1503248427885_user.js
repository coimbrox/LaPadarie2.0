'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.string('lastname', 80).notNullable()
      table.string('username', 200).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('contact', 200).notNullable()
      table.string('address', 200).notNullable()
      table.string('password', 200).notNullable()
      table.string('pedidos', 200)

      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
