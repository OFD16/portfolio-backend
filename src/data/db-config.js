const knex = require('knex');

const knexfile = require('../../knexfile');

const environment =  "production"; // "development" 

module.exports = knex(knexfile[environment]);