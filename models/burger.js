var orm = require('../config/orm.js')

// Create code here that will call the ORM functions using burger specific input for the ORM (???) <see cat example>

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(err, results) {
      if (err) {
        console.log(err)
      }
      
      console.log(results)
      cb(results)
    })
  }
}

module.exports = burger;