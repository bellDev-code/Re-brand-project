require("dotenv").config();

module.exports = require("mysql").createPool({
  database: process.env.database,
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
});
