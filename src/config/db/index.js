const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log("failed");
  }
}

module.exports = { connect };
