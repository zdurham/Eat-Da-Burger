const mysql = require('mysql')
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}
else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "codingbootcamp",
    database: "burgers_db"
  })
}




connection.connect(function(err) {
  if (err) {
    console.log(err)
  }
  console.log("Your connection id is: " + connection.threadId)
})

module.exports = connection;