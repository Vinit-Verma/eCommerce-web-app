const mongoose = require("mongoose");
const orderHistorySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
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

const OrderHistory = mongoose.model("OrderHistory", orderHistorySchema);
module.exports = OrderHistory;
