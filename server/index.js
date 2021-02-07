const express = require('express');
const db = require('../database');
const {sequelize} = require('../models');
const app = express();
const port = process.env.PORT || 5545;

const cors = require('cors');
const bp = require('body-parser');
const path = require('path');

app.use('/rooms/:id', express.static(path.join(__dirname, '../client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());
app.use(cors());

app.get('/propertyDetails/:pId', async(req, res)=>{
  let {pId} = req.params;
  const [results, metadata] = await sequelize.query(`SELECT * FROM Property_details d, Rules r, Sanitations s WHERE d.id=${pId} && r.id=${pId} && s.id=${pId}`);
  try{
    results.length>0?res.status(200).send(results):res.status(404).send('No results');
  }catch (err){
    res.status(500).send(err);
  }
});

//For Jenny room type and building
app.get('/propertyType/:pId', async(req, res)=>{
  let {pId} = req.params;
  const [results, metadata] = await sequelize.query(`SELECT property_type, property_narrow_type FROM Property_details WHERE id=${pId}`);
  try{
    results.length>0?res.status(200).send(results):res.status(404).send('No results');
  }catch(err){
    res.status(500).send(err);
  }
});

//For Slava guest capacity
app.get('/propertyGuestCap/:pId', async(req, res)=>{
  let {pId} = req.params;
  const [results, metadata] = await sequelize.query(`SELECT guest_capacity FROM Property_details WHERE id=${pId}`);
  try{
    results.length>0?res.status(200).send(results):res.status(404).send('No results');
  }catch(err){
    res.status(500).send(err);
  }
});



app.listen(port, ()=>console.log('Server is listening on port ' + port)); 
module.exports = app // for testing purposes
