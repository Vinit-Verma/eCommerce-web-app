const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_img1: {
    type: String,
    // data: buffer,
    required: true,
  },
  product_img2: {
    type: String,
    // data: buffer,
    required: true,
  },
  product_img3: {
    type: String,
    // data: buffer,
    required: true,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_disc_price: {
    type: Number,
    required: true,
  },
  product_MRP: {
    type: Number,
    required: true,
  },
  product_quantity: {
    type: Number,
    required: true,
  },
  product_added: {
    type: Date,
    required: true,
  },
  product_updated: {
    type: Date,
    required: true,
  },
  // color_and_size: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "ColorAndSize",
  //   required: true,
  // },
});
const Product = mongoose.model("Product", productSchema);
module.exports = Product;
