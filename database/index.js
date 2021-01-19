const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'property',
});

connection.connect((err)=>{
  if (err) { throw err; }
  console.log('Connected to database');
//   connection.query('delete from Property_details where Property_details_id = 1', (err, result)=>{
//     if (err) {
//       throw err;
//     }
//     console.log(result.affectedRows);
//   });
});

module.exports.connection = connection;