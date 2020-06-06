const express = require("express");

const router = express.Router();

const database = require("./database");

router.post("/login", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json(database.users[0]);
  } else {
    res.status(400).json("error login in");
  }
  console.log("INSIDE LOGIN");
});

module.exports = router;
