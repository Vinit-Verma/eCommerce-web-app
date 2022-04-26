const express = require("express");
const { mongoose } = require("mongoose");
const app = express();

const cors = require("cors");

const signUp = require("./routes/signUpRoutes");
const login = require("./routes/loginRoutes");
const admin = require("./routes/adminRoutes");
const fetch_All_Products = require("./routes/fetch_All_Product");
const add_to_cart = require("./routes/add_to_cart");
const pay = require("./routes/pay");

require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/eCommerce", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Established!");
  })
  .catch((err) => {
    console.log("No Coonection Established!");
  });

app.listen(3001, () => {
  console.log("Server is running on port 3001 port...");
});

app.use("/", signUp);
app.use("/", login);
app.use("/admin", admin);
app.use("/", fetch_All_Products);
app.use("/", add_to_cart);
app.use("/", pay);
