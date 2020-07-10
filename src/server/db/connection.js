//once the knexfile with postgres declarations is made, then this is used to connect.
const environment = process.env.NODE_ENV || 'development';
const config = require('../../../knexfile.js')[environment];

module.exports = require('knex')(config);
