const mongoose = require("mongoose");
const placed_order = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    products: {
      type: mongoose.Schema.Types.Array,
      ref: "Product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  { timestamps: true }
);

const Placed_Order = mongoose.model("Placed_Order", placed_order);
module.exports = Placed_Order;
