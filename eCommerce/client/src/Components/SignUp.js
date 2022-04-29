import React, { useState } from "react";
import Title from "./Title";
import "../App.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      signUpData.password === signUpData.confirm_password &&
      signUpData.tac === true
    ) {
      Axios.post("http://localhost:3001/signUp", {
        first_name: signUpData.first_name,
        last_name: signUpData.last_name,
        address: signUpData.address,
        email: signUpData.email,
        password: signUpData.password,
        tac: signUpData.tac,
      }).then((res) => {
        alert(typeof res.data === "object" ? res.data.errors[0].msg : res.data);
      });
      navigate("/login");
    } else {
      if (signUpData.password !== signUpData.confirm_password) {
        alert("Password does not match!");
      } else if (signUpData.tac === false) {
        alert("Please accept terms and conditions!");
      }
    }
  };

  const [signUpData, setSignUpData] = useState({
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    password: "",
    confirm_password: "",
    tac: true,
  });

  const onChangeFunc = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]:
        e.target.name === "tac" ? !signUpData.tac : e.target.value,
    });
  };
  return (
    <>
      <Title title={"Sign Up"} />
      <div className="outerSignUpDiv">
        <div className="innerSignUpDiv">
          <form action="" className="signUpForm" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name : </label>
            <input
              type="text"
              name="first_name"
              value={signUpData.first_name}
              onChange={onChangeFunc}
            />
            <label htmlFor="lastName">Last name : </label>
            <input
              type="text"
              name="last_name"
              value={signUpData.last_name}
              onChange={onChangeFunc}
            />
            <label htmlFor="address">Address : </label>
            <textarea
              name="address"
              id=""
              cols=""
              rows="3"
              value={signUpData.textarea}
              onChange={onChangeFunc}
            ></textarea>
            <label htmlFor="email">E-mail : </label>
            <input
              type="text"
              name="email"
              value={signUpData.email}
              onChange={onChangeFunc}
            />
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              name="password"
              value={signUpData.password}
              onChange={onChangeFunc}
            />
            <label htmlFor="cPassword">Confirm Password : </label>
            <input
              type="password"
              name="confirm_password"
              value={signUpData.confirm_password}
              onChange={onChangeFunc}
            />
            <div className="tac">
              <input
                type="checkbox"
                name="tac"
                id="tac"
                onChange={onChangeFunc}
                checked={signUpData.tac}
              />
              <label htmlFor="tac">I accept all the terms & conditions.</label>
            </div>
            <div>
              <input type="submit" value="Sign Up" />
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

export default SignUp;
