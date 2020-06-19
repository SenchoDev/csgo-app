import React from "react";

import Settings from "../settings-overview/settings-overview.component";
import InfoButton from "../info-buton/info-button.component";

import "./player-info.styles.scss";

import Img from "../../assets/Brollan.png";
import Target from "../../assets/target.png";
import Computer from "../../assets/computer.png";
import RedHeart from "../../assets/pink.png";
import PurpleHeart from "../../assets/purple.png";
import Copy from "../../assets/copy.png";
import Close from "../../assets/close.png";

const PlayerInfo = () => (
  <div className="info">
    <div className="info__header">
      <h3 className="info__heading">Brollan</h3>
      <img src={Close} alt="btn" className="info__close" />
    </div>
    <div className="info__grid">
      <div className="info__section">
        <img src={Img} alt="img" className="info__player" />
        <div className="info__overview">
          <span className="info__role">rifler</span>
          <div className="info__wrap">
            <InfoButton child={Target} />
            <div className="info__save">
              <img src={RedHeart} alt="copy" />
              <p className="info__text">Save Crosshair settings</p>
            </div>
            <InfoButton child={Computer} />
            <div className="info__save">
              <img src={PurpleHeart} alt="copys" />
              <p className="info__text">Save User settings</p>
            </div>
          </div>
        </div>
      </div>

      <Settings />
      <div className="info__footer">
        <InfoButton child={Copy} purple />
        <p className="info__config">See config</p>
      </div>
    </div>
  </div>
);

export default PlayerInfo;
