const knex = require('knex');

const knexfile = require('../../knexfile');

const environment =  "production"; //process.env.DB_ENV ||

module.exports = knex(knexfile[environment]);