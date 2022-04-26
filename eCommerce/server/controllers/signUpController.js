const signUpModel = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports.addUser = async (req, res) => {
  const first_name = req.body.first_name;
  const last_name = req.body.last_name;
  const address = req.body.address;
  const email = req.body.email;
  const password = req.body.password;
  const tac = req.body.tac;
  const newUser = new signUpModel({
    first_name,
    last_name,
    address,
    email,
    password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
    tac,
  });
  try {
    await newUser.save();
    res.status(200).send("New user created!");
  } catch (error) {
    console.log(error);
    if (error.code === 11000) res.send("Email already registered!");
  }
};
