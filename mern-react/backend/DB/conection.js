const mongoose = require("mongoose");

const URI =
  "mongodb+srv://Nimit2801:Nimit2801@the-college-app-4ymj7.gcp.mongodb.net/the-college-app?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("db connected..!");
};

module.exports = connectDB;
