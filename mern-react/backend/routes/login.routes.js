const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const database = require("./database");
const User = require("../DB/User");

router.get("/login", (req, res) => {
  req.mongoose.user();
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const dbUser = User.findOne({ email, password });
  //   if (
  //   req.body.email === database.user[0].email &&
  //   req.body.password === database.user[0].password
  // ) {
  //   res.json(database.user[0]);
  // } else {
  //   res.status(400).json("error login in");
  // }
  if (dbUser) {
    console.log(dbUser);
    console.log("Successfully logged in!");
  }
  console.log("INSIDE LOGIN");
});

module.exports = router;
