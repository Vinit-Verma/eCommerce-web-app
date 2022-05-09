const signUpModel = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const payload = { email, password };

  let token = jwt.sign({ payload }, process.env.secret_key, {
    expiresIn: 3600,
  });

  const existingUser = await signUpModel.findOne({ email });
  if (!existingUser) {
    console.log("No user found!");
    res.send("No user Found with such email!");
  }

  if (existingUser) {
    const passwordMatch = bcrypt.compareSync(password, existingUser.password);
    if (!passwordMatch) {
      console.log("Password Mismatched!");
      res.send("Password Mismatched!");
    }

    if (existingUser && passwordMatch) res.send({ token, existingUser });
  }
};
