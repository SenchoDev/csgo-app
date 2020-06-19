import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Settings from "../settings-overview/settings-overview.component";
import InfoButton from "../info-buton/info-button.component";
import { selectPlayersInfo } from "../../redux/teams/teams.selector";

import "./player-info.styles.scss";

import Img from "../../assets/Brollan.png";
import Target from "../../assets/target.png";
import Computer from "../../assets/computer.png";
import RedHeart from "../../assets/pink.png";
import PurpleHeart from "../../assets/purple.png";
import Copy from "../../assets/copy.png";
import Close from "../../assets/close.png";

const PlayerInfo = ({
  info: { name, img, settings, role },
}) => {
  return (
    <div className="info">
      <div className="info__header">
        <h3 className="info__heading">{name}</h3>
        <img src={Close} alt="btn" className="info__close" />
      </div>
      <div className="info__grid">
        <div className="info__section">
          <img src={img} alt="img" className="info__player" />
          <div className="info__overview">
            <span className="info__role">{role}</span>
            <div className="info__wrap">
              <InfoButton child={Target} text={'Crosshair preview'}/>
              <div className="info__save">
                <img src={RedHeart} alt="copy" />
                <p className="info__text">Save Crosshair settings</p>
              </div>
              <InfoButton child={Computer} text={'Players Resolution'}/>
              <div className="info__save">
                <img src={PurpleHeart} alt="copys" />
                <p className="info__text">Save User settings</p>
              </div>
            </div>
          </div>
        </div>

        <Settings settings={settings}/>
        <div className="info__footer">
          <InfoButton child={Copy} purple text={'Copy crosshair'} />
          <p className="info__config">See config</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  info: selectPlayersInfo,
});

export default connect(mapStateToProps)(PlayerInfo);
