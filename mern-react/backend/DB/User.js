const mongoose = require("mongoose");

const user = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", user);
