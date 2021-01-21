const express = require('express');
const db = require('../database');
const app = express();
const port = 5545;

const bp = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/propertyDetails/', (req, res)=>{
  let val = Object.values(req.query);
  if (val.length>0) {
    db.connection.query(`SELECT * FROM Property_details WHERE Property_details_id=${val[0]}`, (err, result)=>{
      if (err) { throw err; }
      res.send(result);
    });
  }
});

app.listen(port, ()=>console.log('Server is listening on port ' + port));