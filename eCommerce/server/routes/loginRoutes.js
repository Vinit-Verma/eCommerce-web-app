const express = require("express");
let router = express.Router();

const loginController = require("../controllers/loginController");
const { validateLoginForm } = require("../validators/loginValidators");

router.post("/login", validateLoginForm, loginController.login);

module.exports = router;
