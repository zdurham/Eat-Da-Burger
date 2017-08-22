var connection = require('../config/connection.js')


var orm = {
  // Used to show each burger
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(err, result) {
      if (err) {
        console.log(err)
      }

      console.log(result)
      cb(result)
    }) 
  }
}
module.exports = orm;