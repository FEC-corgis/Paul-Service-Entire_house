const mysql = require('mysql');
const seed = require('./dbSeed.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'property',
});

connection.connect((err)=>{
  if (err) { throw err; }
  console.log('Connected to database');
  seed.seedPropertyDetails();
});


module.exports.connection = connection;