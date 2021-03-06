const express = require("express");
const app = express();
app.use(express.json());

const orderSchema = require("../models/order_placed");

module.exports.fetch_data = async (req, res) => {
  const user = req.headers.user;
  orderSchema
    // .find({
    //   user: user,
    //   status: false,
    //   createdAt: {
    //     $gte: Date("2022-04-01T00:00:00Z"),
    //     // $lt: Date("2022-04-30T00:00:00Z"),
    //   },
    // })
    .find({ user: user, status: false })
    .populate("products")
    .exec()
    .then((data) => {
      res.json(data);
    });
};

module.exports.fetch_history = async (req, res) => {
  const user = req.headers.user;
  orderSchema
    .find({ user: user, status: true })
    .populate("products")
    .exec()
    .then((data) => {
      res.json(data);
    });
};
