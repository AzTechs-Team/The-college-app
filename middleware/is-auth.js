const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
router.post("/auth", (req, res, next) => {
  try {
    const { token } = req.body;
    if (token) {
      res.status("200").json({ msg: "Success", token });
    } else {
      res.status("401").json({ msg: "Failure", token: token });
    }
  } catch (err) {
    throw err;
  }
});

module.exports = router;
