import React, { useState } from "react";
import Title from "./Title";
import "../App.css";
import Axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const onChangeFunc = (e) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/login", {
      email: loginCredentials.email,
      password: loginCredentials.password,
    }).then((res) => {
      // console.log(res.headers["content-length"]);
      if (res.headers["content-length"] > 200) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.existingUser._id);
        localStorage.setItem("email", res.data.existingUser.email);
        navigate("/");
      }
      if (res.headers["content-length"] < 200) {
        alert(res.data.errors[0].msg);
      }
      if (res.data === "No user Found with such email!") {
        alert(res.data);
      }
    });
  };

  return (
    <>
      <Title title={"Log in"} />
      <div className="outerLoginDiv">
        <div className="innerLoginDiv">
          <form action="" className="loginForm" onSubmit={handleLogin}>
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              value={loginCredentials.email}
              onChange={onChangeFunc}
            />
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              value={loginCredentials.password}
              onChange={onChangeFunc}
            />
            <Link to="/forgotPassword" className="forgot_password">
              Forgot Password
            </Link>
            <div>
              <input type="submit" value="Log in" />
            </div>
            <div className="flex-left">
              <input type="button" value="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
