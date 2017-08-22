var connection = require('../config/connection.js')

// Helper functions
function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

// ORM
var orm = {
  // Used to show each burger
  selectAll: function(table, cb) {
    let queryString = "SELECT * FROM " + table;

    connection.query(queryString, function(err, result) {
      if (err) throw err;

      //console.log(result)
      cb(result)
    }) 
  },
  insert: function(table, cols, vals, cb) {
    var queryString  = "INSERT INTO " + table + "( " + cols.toString() + ") VALUES ( " + printQuestionMarks(vals.length) + ")"

    connection.query(queryString, vals, function(err, result) {
      if (err) throw err;

      cb(result)
    })
  },
  delete: function(table, id, cb) {
    var queryString = "DELETE FROM " + table + "WHERE id =" + id;

    connection.query(queryString, id, function(err, result) {
      if (err) throw err;

      cb(result)
    })
  }
}
module.exports = orm;