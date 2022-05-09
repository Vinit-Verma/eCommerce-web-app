const express = require("express");
let router = express.Router();

const payController = require("../controllers/payController");
const { validatePay } = require("../validators/payValidator");

router.post("/pay", validatePay, payController.pay);
module.exports = router;
