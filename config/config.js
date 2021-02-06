const config = require('./config.json');

process.env.DBUSERNAME = config.development.username;
process.env.DBPW = config.development.password;
process.env.DB = config.development.database;