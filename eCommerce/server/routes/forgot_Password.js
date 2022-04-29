const express = require("express");
const router = express.Router();

const forgot_Password_Controller = require("../controllers/forgot_Password_Controller");

router.patch("/forgot_Password", forgot_Password_Controller.update_password);
module.exports = router;
