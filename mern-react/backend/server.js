const express = require("express");
const app = express();
//const bcrypt= require('bcrypt-nodejs')
const cors = require("cors");

//mongoose connecting to mongoDB
const connectDB = require("./DB/conection");
const user = require("./DB/User");
connectDB();

//api user model
// const userModel = require("./Api/User");
app.use(express.json({ extended: false }));
const port = process.env.Port || 3001;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//routes called
const loginRoute = require("./routes/login.routes");
const signupRoute = require("./routes/signup.routes");
const userRoute = require("./routes/user.routes");

const database = require("./routes/database");

// app.post("/signup", userModel);

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/login", loginRoute);
app.post("/signup", signupRoute);
app.get("/user", userRoute);

// app.post("/login", (req, res) => {
//   if (
//     req.body.email === database.users[0].email &&
//     req.body.password === database.users[0].password
//   ) {
//     res.json(database.users[0]);
//   } else {
//     res.status(400).json("error login in");
//   }
// });

// app.post("/signup", (req, res) => {
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

// app.post("/user", (req, res) => {
//   const { id } = req.body;
//   let found = false;
//   database.users.forEach((user) => {
//     if (user.id === +id) {
//       found = true;
//       return res.json(user);
//     }
//   });
//   if (!found) {
//     return res.status(400).json("User not found");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
