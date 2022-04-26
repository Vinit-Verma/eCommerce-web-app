const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    // required: true,
    // type: mongoose.Schema.Types.ObjectId,
    // ref: "Address",
  },
  email: {
    type: String,
    required: true,
    // unique: true,
    // validate(value) {
    //   if (!validator.isEmail(value)) {
    //     throw new Erroe("Invalid email!");
    //   }
    // },
  },
  password: {
    type: String,
    require: true,
  },
  tac: {
    type: Boolean,
    require: true,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
