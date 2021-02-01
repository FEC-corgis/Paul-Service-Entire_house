const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: config.user,
  password: config.pw,
  database: config.database,
});

connection.connect((err)=>{
  if (err) { throw err; }
  console.log('Connected to Database');
  // seed.seedPropertyDetails();
});


module.exports.connection = connection;