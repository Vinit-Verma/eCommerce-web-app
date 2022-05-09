const mongoose = require("mongoose");
const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.String,
    ref: "User",
    required: true,
  },
  product_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  product_quantity: {
    type: Number,
    required: true,
  },
  date_added_to_cart: {
    type: Date,
    required: true,
  },
  color: {
    type: String,
  },
  size: {
    type: String,
  },
});
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
