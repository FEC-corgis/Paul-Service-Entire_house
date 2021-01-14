const express = require('express');
const app = express();
const port = 5545;

const bp = require('body-parser');
const path = require('path');
app.use(express.static(path.join(__dirname, '../client')));
app.use(bp.urlencoded({extended: true}));
app.use(bp.json());

app.get('/propertyDetails/', (req, res)=>{
  console.log('do something');
});

app.listen(port, ()=>console.log('Server is listening on port '+port));