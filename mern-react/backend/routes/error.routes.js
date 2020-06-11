const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

router.use("/", (req, res, next) => {
  console.log("Err 404");
  res.status("404");
  res.sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
