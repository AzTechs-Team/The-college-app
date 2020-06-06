const express = require("express");

const database = {
  users: [
    {
      id: 123,
      name: "john",
      username: "jon",
      email: "john@gmail.com",
      password: "test",
      joined: new Date(),
    },
    {
      id: 124,
      name: "sally",
      username: "sal",
      email: "sally@gmail.com",
      password: "password",
      joined: new Date(),
    },
  ],
};

module.exports = database;
