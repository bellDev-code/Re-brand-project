const express = require("express");
const app = express();
const fs = require("fs");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config();

require("./seeder");

app.use(
  cors({
    origin: "http://localhost:8080",
    credentials: true,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use("/static", express.static(__dirname + "/uploads"));

let sql = require("./sql.js");

fs.watchFile(__dirname + "/sql.js", (curr, prev) => {
  console.log("sql 변경시 재시작 없이 반영되도록 함.");
  delete require.cache[require.resolve("./sql.js")];
  sql = require("./sql.js");
});

// 모든 api로 시작하는 요청은 apiRouter로 간다.
const apiRouter = require("./routers/api");
app.use("/api", apiRouter);

// const sys = {
//   async db(alias, param = [], where = "") {
//     return new Promise((resolve, reject) =>
//       dbPool.query(sql[alias].query + where, param, (error, rows) => {
//         if (error) {
//           if (error.code != "ER_DUP_ENTRY") console.log(error);
//           resolve({
//             error,
//           });
//         } else resolve(rows);
//       })
//     );
//   },
// };

app.listen(3000, () => {
  var dir = __dirname + "/uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log("Server stared. port 3000.");
});
