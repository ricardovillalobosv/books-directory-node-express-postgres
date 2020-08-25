const pg = require("pg-promise")();
require("dotenv").config();

const conection = {
  host: process.env.HOST,
  port: process.env.PORT_DATABASE,
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
};

const DATABASE = pg(conection);

module.exports = DATABASE;
