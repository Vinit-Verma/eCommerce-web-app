import React, { useState } from "react";
import Title from "./Title";
import Axios from "axios";

const ForgotPassword = () => {
  const [reset_password_data, setReset_password_data] = useState({
    email: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(reset_password_data);
    if (
      reset_password_data.newPassword.length !== 0 &&
      reset_password_data.newPassword === reset_password_data.confirmPassword
    ) {
      Axios.patch("http://localhost:3001/forgot_Password", {
        email: reset_password_data.email,
        password: reset_password_data.newPassword,
      });
    } else {
      console.log("Not a match!");
    }
  };

  const onChangeFunc = (e) => {
    setReset_password_data({
      ...reset_password_data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <Title title={"Reset Your Password"} />
      <div className="outerDiv">
        <div className="innerDiv">
          <form action="" className="loginForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your email id :</label>
            <input type="text" name="email" onChange={onChangeFunc} />
            <label htmlFor="newPassword">Enter a new password : </label>
            <input type="password" name="newPassword" onChange={onChangeFunc} />
            <label htmlFor="confirmPassword">Confirm new password : </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={onChangeFunc}
            />
            <div>
              <input type="submit" value="Create new password" />
            </div>
            <div className="flex-left">
              <input type="button" value="Cancel" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
