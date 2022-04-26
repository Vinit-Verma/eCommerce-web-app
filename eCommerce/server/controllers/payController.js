const payModel = require("../models/order_placed");

module.exports.pay = async (req, res) => {
  const amount = req.body.amount;
  const products = req.body.products;
  const user = req.body.user;
  const address = req.body.address;
  const status = req.body.status;
  const new_order_placed = new payModel({
    amount,
    products,
    user,
    address,
    status,
  });
  try {
    await new_order_placed.save();
    res.send("Order in Progress!");
  } catch (err) {
    console.log(err);
  }
};
