const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  delivery_address: {
    type: String,
    required: true,
  },
  // billing_address: {
  //   type: String,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});
const Address = mongoose.model("Address", addressSchema);
module.exports = Address;
