const cartModel = require("../models/cart");

module.exports.add_to_cart = async (req, res) => {
  const user = req.body.user;
  const product_id = req.body.product_id;
  const product_quantity = req.body.product_quantity;
  const date_added_to_cart = req.body.date_added_to_cart;
  const color = req.body.color;
  const size = req.body.size;
  const new_cart = new cartModel({
    user,
    product_id,
    product_quantity,
    date_added_to_cart,
    color,
    size,
  });
  try {
    await new_cart.save();
    res.send("Product added to cart");
  } catch (error) {
    console.log(error);
  }
};

module.exports.get_for_cart = async (req, res) => {
  const user = req.headers.user;
  cartModel
    .find({ user: user })
    .populate("user")
    .populate("product_id")
    .exec()
    .then((data) => {
      res.json(data);
    });
};

module.exports.delete = async (req, res) => {
  const id = req.params.id;
  await cartModel.findByIdAndDelete(id).exec();
};

module.exports.delete_many = async (req, res) => {
  const user = req.headers.user;
  await cartModel.deleteMany({ user });
};
