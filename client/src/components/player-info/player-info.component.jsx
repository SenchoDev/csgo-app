import React from "react";

import "./player-info.styles.scss";

import Img from "../../assets/Brollan.png";


import Target from "../../assets/target.png";
import Computer from "../../assets/computer.png";
import RedHeart from "../../assets/pink.png";
import PurpleHeart from "../../assets/purple.png";
import Copy from '../../assets/copy.png'
import Close from '../../assets/close.png'


const PlayerInfo = () => (
  <div className="info">
    <div className="info__header">
      <h3 className="info__heading">Brollan</h3>
      <img src={Close} alt="btn" className="info__close"/>
    </div>
    <div className="info__grid">

      <div className="info__section">
        <img src={Img} alt="img" className="info__player"/>
        <div className="info__overview">
          <span className="info__role">rifler</span>
          <div className="info__wrap">
            <div className="big-button">
              <img src={Target} alt="copy" className="big-button__img"/>
              <p className="big-button__text">Crosshair Preview</p>
            </div>
            <div className="info__save">
            <img src={RedHeart} alt="copy"/>
              <p className="info__text">Save Crosshair settings</p>
            </div>
            <div className="big-button">
            <img src={Computer} alt="copy"  className="big-button__img"/>
              <p className="big-button__text">Crosshair Preview</p>
            </div>
            <div className="info__save">
            <img src={PurpleHeart} alt="copys"/>
              <p className="info__text">Save User settings</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
);

export default PlayerInfo;
