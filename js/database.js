const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const uri = "mongodb+srv://<CardGenerator>:<TFynDwfpZhogmChf>@cluster0.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connected to MongoDB");
});

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
  });

  const User = mongoose.model('User', userSchema);

  const newUser = new User({
    username: "mawi",
    password: "womp",
    email: "mawi@gmail.com"
  });
  
  newUser.save((err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("User saved to the database");
  });
  
  