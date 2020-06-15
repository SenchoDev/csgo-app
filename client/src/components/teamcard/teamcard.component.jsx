import React from "react";

import "./teamcard.styles.scss";

const TeamCard = ({ team, imageUrl, color, players, teamColor }) => {
  return (
    <div className="directory-item">
      <div className="directory-item__heading-box " style={{backgroundColor: `${color}`}}>
        <h3 className={`directory-item__heading ${teamColor ? 'directory-item__heading--black' :  ""}` } >{team}</h3>
      </div>
      <div className="directory-item__grey-box">
        <p className="directory-item__player">{players[0]}</p>
      </div>
      <div className="directory-item__white-box">
        <p className="directory-item__player">{players[1]}</p>
      </div>
      <div className="directory-item__grey-box">
        <p className="directory-item__player">{players[2]}</p>
      </div>
      <div className="directory-item__white-box">
        <p className="directory-item__player">{players[3]}</p>
      </div>
      <div className="directory-item__grey-box">
        <p className="directory-item__player">{players[4]}</p>
      </div>
      <div className="directory-item__logo" style={{backgroundImage: `url(${imageUrl})`}}> 
      </div>
    </div>
  );
};

export default TeamCard;
