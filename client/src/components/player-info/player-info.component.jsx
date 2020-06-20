import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Settings from "../settings-overview/settings-overview.component";
import InfoButton from "../info-buton/info-button.component";
import Copy from '../Copy/copy.component'

import { selectPlayersInfo } from "../../redux/teams/teams.selector";
import { togglePlayersInfoHidden } from "../../redux/teams/teams.actions";
import { addCrosshair } from "../../redux/settings/settings.actions";
import { selectIfCopied } from "../../redux/settings/settings.selector";

import "./player-info.styles.scss";

import Target from "../../assets/target.png";
import Computer from "../../assets/computer.png";
import RedHeart from "../../assets/pink.png";
import PurpleHeart from "../../assets/purple.png";
import Close from "../../assets/close.png";

const PlayerInfo = ({
  info: { name, img, settings, role, crosshair, team, id },
  togglePlayersInfoHidden,
  copied,
  addCrosshair
}) => {
  return (
    <div className="info">
    <div className={`${copied ? 'info__copied-succes': ''} info__copied`}> <p className="info__copied-text">Copied to clipboard</p></div>
      <div className="info__header">
        <h3 className="info__heading">{name}</h3>
        <img
          src={Close}
          alt="btn"
          className="info__close"
          onClick={togglePlayersInfoHidden}
        />
      </div>
      <div className="info__grid">
        <div className="info__section">
          <img src={img} alt="img" className="info__player" />
          <div className="info__overview">
            <span className="info__role">{role}</span>
            <div className="info__wrap">
              <InfoButton img={Target} text={"Crosshair preview"} />
              <div className="info__save" onClick={() => addCrosshair({team, name, crosshair, id})}>
                <img src={RedHeart} alt="copy" />
                <p className="info__text">Save Crosshair settings</p>
              </div>
              <InfoButton img={Computer} text={"Players Resolution"} />
              <div className="info__save">
                <img src={PurpleHeart} alt="copys" />
                <p className="info__text">Save User settings</p>
              </div>
            </div>
          </div>
        </div>

        <Settings settings={settings} />
        <div className="info__footer">
          <Copy crosshair={crosshair}/>
          <p className="info__config">See config</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  info: selectPlayersInfo,
  copied: selectIfCopied,
});

const mapDispatchToProps = (dispatch) => ({
  togglePlayersInfoHidden: () => dispatch(togglePlayersInfoHidden()),
  addCrosshair: (item) => dispatch(addCrosshair(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerInfo);
