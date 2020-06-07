const express = require("express");
const app = express();
//mongoose connecting to mongoDB
const connectDB = require("./DB/conection");
const user = require("./DB/User");
connectDB();

//api user model
const userModel = require("./Api/User");
app.use(express.json({ extended: false }));
const port = process.env.Port || 3001;

app.use("/api/userModel", userModel);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
