// ORM = Object Relational Manager, a thing that will write queries for us (this one is not MySQL)
const orm = require('../config/orm.js')

const burger = {
  all: function (cb) {
    orm.all('burgers', function (res) {
      cb(res)
    })
  },
  create: function (name, cb) {
    orm.create('burgers', ['burger_name', 'devoured'], [name, false], cb)
  },
  update: function (id, cb) {
    var condition = 'id=' + id
    orm.update('burgers', {
      devoured: true
    }, condition, cb)
  }
}
module.exports = burger
