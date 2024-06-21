
// const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
// const connection = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB
// });

// For temporary exporter
// const connection2 = mysql.createConnection({
//   host: dbConfig.HOST,
//   user: dbConfig.USER,
//   password: dbConfig.PASSWORD,
//   database: dbConfig.DB //"cp"
// });

// open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database1.");
// });

// open the MySQL connection2
// connection2.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database2.");
// });
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: dbConfig.HOST,
  port: 3306,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
  // connection.end();
});


module.exports = { connection };