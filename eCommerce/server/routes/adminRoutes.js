const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const AdminBroMongoose = require("admin-bro-mongoose");
const mongoose = require("mongoose");
const productSchema = require("../models/product");
const addressSchema = require("../models/address");
const cartSchema = require("../models/cart");
const color_sizeSchema = require("../models/color_size");
const orderHistorySchema = require("../models/order_history");
const userSchema = require("../models/user");
const orderPlacedSchema = require("../models/order_placed");

AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
});

const ADMIN = {
  email: "admin@admin.com",
  password: "12345",
};

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  cookieName: "admin",
  cookiePassword: "12345",
  authenticate: async (email, password) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return ADMIN;
    }
    return null;
  },
});

module.exports = router;
