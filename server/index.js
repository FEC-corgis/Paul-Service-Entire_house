const express = require('express');
const db = require('../database');
const {sequelize} = require('../models');
const app = express();
const port = 5545;

const bp = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/propertyDetails/', async(req, res)=>{
  let val = Object.values(req.query);
  if (val.length > 0) {
    const [results, metadata]= await sequelize.query(`SELECT * FROM Property_details d, Rules r, Sanitations s WHERE d.id=${val[0]} && r.id=${val[0]} && s.id=${val[0]}`);
    res.status(200).send(results);
  }
});

app.listen(port, ()=>console.log('Server is listening on port ' + port)); 
module.exports = app // for testing purposes