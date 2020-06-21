import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectFavoriteCrosshairs } from "../../redux/settings/settings.selector";
import { selectIfCopied } from "../../redux/settings/settings.selector";

import Copy from '../../components/Copy/copy.component'
import PinkHeart from "../../assets/pink.png";

import "./playerscrosshairs.styles.scss";

const PlayersCrosshairs = ({ savedCrosshairs, copied }) => {
  return (
    <div className="crosshair">
    <div className={`${copied ? 'info__copied-succes': ''} info__copied`}> <p className="info__copied-text">Copied to clipboard</p></div>
      
    {savedCrosshairs.map(({ crosshair, id, name, team, imageUrl}) => (
        <div className="crosshair__wrap" key={id}>
          <img src={PinkHeart} alt="pink heart" />
          <h2 className="crosshair__heading">{name}</h2>
          <span className="crosshair__team">{team}</span>
          <Copy crosshair={crosshair}/>
          <div className="crosshair__img" style={{backgroundImage: `url(${imageUrl})`}}></div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  savedCrosshairs: selectFavoriteCrosshairs,
  copied: selectIfCopied
});


export default connect(mapStateToProps)(PlayersCrosshairs);
