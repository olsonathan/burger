// Set up MySQL connection.
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
//	else deploy Locally
  connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "root",
      database: "sandwhich_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
      console.error("error connecting: " + err);
      return;
  }
  console.log("Connected ID: " + connection.threadId);
});

module.exports = connection;


