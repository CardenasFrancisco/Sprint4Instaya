const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { hostURL: process.env.HOST_URL + "/api-doc" });
});

module.exports = router;
