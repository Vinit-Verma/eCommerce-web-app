const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/ordersController");

router.get("/placed_orders", ordersController.fetch_data);
router.get("/order_history", ordersController.fetch_history);

module.exports = router;
