const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
var bcrypt = require("bcryptjs");
const User = require("../DB/User");

router.get("/login", (req, res) => {
  req.mongoose.user();
});

router.post("/login", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { email, password } = req.body;
  const dbUser = User.findOne({ email })
    .then((user) => {
      if (bcrypt.compareSync(password, user.password)) {
        res.json(user);
      } else {
        console.log("Error");
      }
    })
    .catch((err) => console.log(err));
});

module.exports = router;
