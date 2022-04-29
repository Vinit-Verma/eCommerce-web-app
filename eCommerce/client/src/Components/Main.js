import React from "react";
import "../App.css";
import AllProducts from "./AllProducts";
import Cart from "./Cart";
import Login from "./Login";
import Pay from "./Pay";
import ProductDetails from "./ProductDetails";
import SignUp from "./SignUp";
import { Routes, Route } from "react-router-dom";
import MyOrders from "./MyOrders";
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute";
import ForgotPassword from "./ForgotPassword";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Route>

        <Route path="/" element={<AllProducts />} />
        <Route path="/productDetails" element={<ProductDetails />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/myOrders" element={<MyOrders />} />
        </Route>
      </Routes>
    </main>
  );
};

export default Main;
