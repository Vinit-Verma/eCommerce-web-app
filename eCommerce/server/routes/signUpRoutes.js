const express = require("express");
let router = express.Router();

const signUpController = require("../controllers/signUpController");
const { validateUser } = require("../validators/signUpValidators");

router.post("/signUp", validateUser, signUpController.addUser);

module.exports = router;
