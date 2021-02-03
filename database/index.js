const { sequelize } = require('../models');
const seed = require('./seeding/dbSeed.js');

(async ()=>{
  await sequelize.sync({force: true})
  console.log('Database Synced!')
  seed.seedPropertyDetails();
})();
