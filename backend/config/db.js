const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kart99006_db_user:pi4BIdSaGrunmHAX@cluster0.ogeck4o.mongodb.net/milkDB?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB Connected");
};

module.exports = connectDB;
