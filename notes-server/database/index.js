var Sequelize = require('sequelize')

var env = process.env.NODE_ENV || 'development';
var config = require('./config.json')[env];

var sequelize = new Sequelize(config.database, config.username, config.password, config);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
