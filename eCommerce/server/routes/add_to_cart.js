const express = require("express");
let router = express.Router();

const add_to_cart = require("../controllers/add_to_cart");

router.post("/cart", add_to_cart.add_to_cart);
router.get("/cart", add_to_cart.get_for_cart);
router.delete("/delete/:id", add_to_cart.delete);
module.exports = router;
