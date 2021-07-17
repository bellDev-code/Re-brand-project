const express = require("express");

const router = express.Router();

// status code 200대 = 정상
// status code 400대 = error
router.get("/products", (req, res, next) => {
  console.log("hi produsts");
  res.status(200).send("hi");
});

module.exports = router;
