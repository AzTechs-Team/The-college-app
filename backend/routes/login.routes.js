const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../DB/User");
const jwt = require('jsonwebtoken')

router.get("/login", (req, res) => {
  req.mongoose.user();
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email })
    .then((user) => {
      if(user){
        if (bcrypt.compareSync(password, user.password)) {
          jwt.sign(
            {
              name:user.name,
              username: user.username,
              email: user.email,
              phone: user.phone,
              department: user.department,
            },
            "Dummy text",
            { expiresIn: "1h" },
            function (err, token) {
              res.status(200).json({token});
            }
          );
        } 
        else{
          res.status(400).json(false)
        }
      }
      else{
        res.status(400).json(false)
      }
    })
    .catch((err) => {
      res.status(400).json(false)
      console.log(err)
    });
});

module.exports = router;
