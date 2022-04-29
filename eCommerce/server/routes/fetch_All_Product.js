const express = require("express");
let router = express.Router();

const fetch_All_Products_Controller = require("../controllers/fetch_All_Products_Controller");

router.get("/", fetch_All_Products_Controller.fetch_All_Products);
router.patch("/update", fetch_All_Products_Controller.update_product);

module.exports = router;
