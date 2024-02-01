const config = require("../../../knexfile");
const sqlite3 = require("sqlite3");
const knex = require("knex");

const connection = knex(config.development);

module.exports = connection;
