import React, { useState } from "react";

import FormInput from "../form-input/form-input.component";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;
  console.log(email)

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
  };
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };
  return (
    <div className="sign-in">
      <h2 className="sign-in__heading">I already have an account</h2>
      <span className="sign-in__span">
        Sign in with your email and password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="EMAIL"
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="PASSWORD"
          required
        />

      </form>
    </div>
  );
};

export default SignIn;
