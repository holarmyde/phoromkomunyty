const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); // this  is to get the value in your mongo db in the json file

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }); // this is to connect to mongo db

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);

    //Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
