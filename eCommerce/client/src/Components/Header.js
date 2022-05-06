import "../App.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import cart_badge_context from "../context/cart_badge/cart_badge_context";

const Header = () => {
  const context = useContext(cart_badge_context);
  const [data_for_icon_badge, setData_for_icon_badge] = useState([]);
  const navigate = useNavigate();
  // console.log(context);

  const handleSignUpClick = () => {
    navigate("/signUp");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  const handleMyCartClick = () => {
    navigate("/cart");
  };

  const handlemyOrdersClick = () => {
    navigate("/myOrders");
  };

  const handle_logout_click = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("email");
    navigate("/");
  };

  const fetch_for_cart = () => {
    Axios.get("http://localhost:3001/cart", {
      headers: {
        user: localStorage.getItem("user_id"),
      },
    }).then(async (res) => {
      await setData_for_icon_badge(res.data);
    });
  };
  // console.log(data_for_icon_badge.length);

  useEffect(() => {
    fetch_for_cart();
    context.setTrue();
  }, [context.cartBadgeSignal]);

  return (
    <header>
      <nav>
        <div>
          <figure>
            <img
              src={require("../images/logo_white.png")}
              alt="logo"
              className="logo"
              onClick={handleLogoClick}
            />
          </figure>
        </div>
        <div className="navRightDiv">
          <ul>
            <li>
              <div
                className="badge"
                style={
                  localStorage.getItem("token") !== null
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                {data_for_icon_badge.length}
              </div>
              <input
                type="button"
                value="My Cart"
                className="cartBtn"
                onClick={handleMyCartClick}
                style={
                  localStorage.getItem("token") !== null
                    ? { display: "block" }
                    : { display: "none" }
                }
              />
            </li>
            <li>
              <input
                type="button"
                value="My Orders"
                className="myOrdersBtn"
                onClick={handlemyOrdersClick}
                style={
                  localStorage.getItem("token") !== null
                    ? { display: "block" }
                    : { display: "none" }
                }
              />
            </li>
            <li>
              <input
                type="button"
                value="Log in"
                className="loginBtn"
                onClick={handleLoginClick}
                style={
                  localStorage.getItem("token") === null
                    ? { display: "block" }
                    : { display: "none" }
                }
              />
            </li>
            <li>
              {" "}
              <input
                type="button"
                value="Sign up"
                className="signupBtn"
                onClick={handleSignUpClick}
                style={
                  localStorage.getItem("token") === null
                    ? { display: "block" }
                    : { display: "none" }
                }
              />
            </li>
            <li>
              <input
                type="button"
                value="Logout"
                className="logoutBtn"
                onClick={handle_logout_click}
                style={
                  localStorage.getItem("token") !== null
                    ? { display: "block" }
                    : { display: "none" }
                }
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
