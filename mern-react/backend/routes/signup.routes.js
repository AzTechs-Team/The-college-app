const express = require("express");

const router = express.Router();

const database = require("./database");
router.post("/signup", (req, res) => {
  const { email, name, username } = req.body;
  database.users.push({
    id: 125,
    name: name,
    email: email,
    username: username,
    joined: new Date(),
  });
  res.json(database.users[database.users.length - 1]);
});

module.exports = router;
