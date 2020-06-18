import React from "react";

import "./settings-overview.styles.scss";

import Headset from "../../assets/headset.png";

import Mouse from "../../assets/mouse-clicker.png";
import Keyboard from "../../assets/gaming.png";
import MousePad from "../../assets/virtual-reality.png";
import Monitor from "../../assets/television.png";

const Settings = () => {
  return (
    <div className="overview">
      <div className="overview__item">
        <img src={Headset} alt="heart" />
        <h3 className="overview__heading">Headset</h3>
      </div>
      <div className="overview__item">
        <img src={Monitor} alt="heart" />
        <h3 className="overview__heading">Monitor</h3>
      </div>
      <div className="overview__item">
        <img src={Mouse} alt="heart" />
        <h3 className="overview__heading">Mouse</h3>
      </div>
      <div className="overview__item">
        <img src={Keyboard} alt="heart" />
        <h3 className="overview__heading">Keyboard</h3>
      </div>
      <div className="overview__item">
        <img src={MousePad} alt="heart" />
        <h3 className="overview__heading">Mousepad</h3>
      </div>
      <div className="overview__item">
        <p className="overview__text">Turtle Beach Elite Pro</p>
      </div>
      <div className="overview__item">
        <p className="overview__text">Benq XL2546</p>
      </div>
      <div className="overview__item">
        <p className="overview__text">Zowie EC2-B</p>
      </div>
      <div className="overview__item">
        <p className="overview__text">Logitech G-PRO</p>
      </div>
      <div className="overview__item">
        <p className="overview__text">Logitech G-PRO</p>
      </div>
    </div>
  );
};

export default Settings;
