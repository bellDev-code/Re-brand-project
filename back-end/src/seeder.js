const db = require("./db");

db.query("SELECT 1 + 1 AS solution", (error, result, fields) => {
  if (error) throw error;
  console.log(result);
});
