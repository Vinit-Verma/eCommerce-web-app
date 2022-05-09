const express = require("express");
const app = express();

const productModel = require("../models/product");

app.use(express.json());

module.exports.fetch_All_Products = async (req, res) => {
  productModel
    .find({ display: true })
    .populate()
    .exec()
    .then((data) => {
      res.json(data);
    });
};

module.exports.update_product = async (req, res) => {
  const num = req.body.num;
  const id = req.body.id;
  // console.log(num, id);
  productModel.findOneAndUpdate(
    { _id: id },
    { product_quantity: num },
    // { new: true },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // console.log(data);
      }
    }
  );
};
