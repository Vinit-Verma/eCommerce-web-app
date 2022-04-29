const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();

const userModel = require("../models/user");

app.use(express.json());

module.exports.update_password = async (req, res) => {
  const email = req.body.email;
  const password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
  const existingUser = await userModel.findOne({ email });
  if (existingUser) {
    await userModel.findOneAndUpdate(
      { email: email },
      { password: password },
      { new: true }
    );
    res.send("Password Updated!");
  } else {
    console.log("No user found!");
    res.send("No user found with such email!");
  }
};
