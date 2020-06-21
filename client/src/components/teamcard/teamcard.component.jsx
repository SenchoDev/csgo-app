import React from "react";
import { connect } from "react-redux";
import { addPlayersInfo } from "../../redux/teams/teams.actions";

import "./teamcard.styles.scss";

const TeamCard = ({ section, addPlayersInfo }) => {
  const { team, imageUrl, color, players, teamColor, teamsData } = section;
  return (
    <div className="directory-item">
      <div className="directory-item__heading-box " style={{ backgroundColor: `${color}` }}>
        <h3 className={`directory-item__heading ${ teamColor ? "directory-item__heading--black" : ""}`}>
          {team}
        </h3>
      </div>
      {players.map((item, i) => (
        <div key={i} className={`${ i % 2 === 0 ? "directory-item__grey-box" : "directory-item__white-box" } `}
          onClick={() => addPlayersInfo({ ...teamsData[i], team, imageUrl })}
        >
          <p className="directory-item__player">{players[i]}</p>
        </div>
      ))}
      <div className="directory-item__logo"style={{ backgroundImage: `url(${imageUrl})` }} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPlayersInfo: (info) => dispatch(addPlayersInfo(info)),
});

export default connect(null, mapDispatchToProps)(TeamCard);

/* <div
        className="directory-item__grey-box"
        onClick={() => addPlayersInfo({ ...teamsData[0], team, imageUrl })}
      >
        <p className="directory-item__player">{players[0]}</p>
      </div>
      <div
        className="directory-item__white-box"
        onClick={() => addPlayersInfo({ ...teamsData[1], team, imageUrl })}
      >
        <p className="directory-item__player">{players[1]}</p>
      </div>
      <div
        className="directory-item__grey-box"
        onClick={() => addPlayersInfo({ ...teamsData[2], team, imageUrl })}
      >
        <p className="directory-item__player">{players[2]}</p>
      </div>
      <div
        className="directory-item__white-box"
        onClick={() => addPlayersInfo({ ...teamsData[3], team, imageUrl })}
      >
        <p className="directory-item__player">{players[3]}</p>
      </div>
      <div
        className="directory-item__grey-box"
        onClick={() => addPlayersInfo({ ...teamsData[4], team, imageUrl })}
      >
        <p className="directory-item__player">{players[4]}</p>
      </div> */
