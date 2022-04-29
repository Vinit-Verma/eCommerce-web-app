import "../App.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

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
                5
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
