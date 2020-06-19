import React from "react";

import "./info-button.styles.scss";

const InfoButton = ({child , purple}) => {
  return (
    <div className={`${purple ? 'purple-btn' : ''} big-button`}>
      <img src={child} alt="copy" className="big-button__img" />
      <p className="big-button__text">Crosshair Preview</p>
    </div>
  );
};

export default InfoButton;
