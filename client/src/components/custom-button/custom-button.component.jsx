import React from "react";

import "./custom-button.styles.scss";
import { ReactComponent as GoogleLogo } from "../../assets/google.svg";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "sign-in-with-google" : ""} button`}
    {...otherProps}
  >
    {isGoogleSignIn ? <GoogleLogo className="button__logo" /> : ""}
    <h5 className="button__text">{children}</h5>
  </button>
);

export default CustomButton;
