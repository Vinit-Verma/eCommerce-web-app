const express = require("express");
const app = express();

const productModel = require("../models/product");

app.use(express.json());

module.exports.fetch_All_Products = async (req, res) => {
  productModel
    .find()
    .populate()
    .exec()
    .then((data) => {
      res.json(data);
    });
};
