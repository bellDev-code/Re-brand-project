const express = require("express");
const fs = require("fs");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

require("./seeder");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "50mb",
  })
);

app.use("/static", express.static(__dirname + "/uploads"));

// 모든 api로 시작하는 요청은 apiRouter로 간다.
const apiRouter = require("./routers/api");
app.use("/api", apiRouter);

app.listen(3001, () => {
  var dir = __dirname + "/uploads";
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  console.log("Server stared. port 3001.");
});
