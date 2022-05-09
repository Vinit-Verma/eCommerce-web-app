const express = require("express");
let router = express.Router();

const payController = require("../controllers/payController");

router.post("/pay", payController.pay);
module.exports = router;
