import React from "react";

import "./playerscrosshairs.styles.scss";

import InfoButton from "../../components/info-buton/info-button.component";

import Copy from "../../assets/copy.png";
import PinkHeart from "../../assets/pink.png";

const PlayersCrosshairs = () => {
  return (
    <div className="crosshair">
      <div className="crosshair__wrap">
        <img src={PinkHeart} alt="pink heart" />
        <h2 className="crosshair__heading">Brollan</h2>
        <span className="crosshair__team">Fnatic</span>
        <InfoButton img={Copy} purple text={'Copy crosshair'}/>
        <p className="crosshair__config">See config</p>
      </div>
      <div className="crosshair__wrap">
        <img src={PinkHeart} alt="pink heart" />
        <h2 className="crosshair__heading">Brollan</h2>
        <span className="crosshair__team">Fnatic</span>
        <InfoButton img={Copy} purple text={'Copy crosshair'} />
        <p className="crosshair__config">See config</p>
      </div>
    </div>
  );
};

export default PlayersCrosshairs;
