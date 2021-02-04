const { sequelize } = require('../models');
const seed = require('./seeding/dbSeed.js');

(async ()=>{
  try{
    await sequelize.sync()
    console.log('Database Synced!')
    const [res, meta] = await sequelize.query(`SELECT id FROM Property_details WHERE id=100`);
    res.length===0?seed.seedPropertyDetails():null;
  } catch(err) {
      console.log('error: ', err);
  }
})();

