const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/user", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  const { token } = req.body;
  jwt.verify(token, 'Dummy text', function(err, decoded) {
    res.json(decoded)
  });

  // database.users.forEach((user) => {
  //   if (user.id === +id) {
  //     found = true;
  //     let store=localStorage.getItem('login');
  //     jwt.verify(store, 'Dummy text', function(err, decoded) {
  //       console.log(decoded) // bar
  //     });
  //     return res.json(user);
  //   }
  // });
  // if (!found) {
  //   return res.status(400).json("User not found");
  // }
});

module.exports = router;
