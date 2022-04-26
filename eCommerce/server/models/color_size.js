const mongoose = require("mongoose");
const color_size_Schema = mongoose.Schema({
  colors: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  // product: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Product",
  // },
});
const ColorAndSize = mongoose.model("ColorAndSize", color_size_Schema);
module.exports = ColorAndSize;
