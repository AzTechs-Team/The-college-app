const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Us  er = require("../DB/User");
// const database = require("./database");

router.post("/signup", async (req, res) => {
  const { name, username, email, password } = req.body;
  let user = {};
  user.name = name;
  user.username = username;
  user.email = email;
  user.password = password;
  let userModel = new User(user);
  await userModel.save();
  res.json(userModel);
});

// router.post("/signup", (req, res) => {
//   const { email, name, username } = req.body;
//   database.users.push({
//     id: 125,
//     name: name,
//     email: email,
//     username: username,
//     joined: new Date(),
//   });
//   res.json(database.users[database.users.length - 1]);
// });

module.exports = router;
