import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, type, ...otherProps }) => (
  <div className="group">
    {label ? <label className="group__label">{label}</label> : null}
    <input
      className="group__input form-input"
      type={type}
      onChange={handleChange}
    />
  </div>
);
export default FormInput;
