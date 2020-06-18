import React from "react";
import { connect } from 'react-redux';
import { addPlayersInfo } from '../../redux/teams/teams.actions'

import "./teamcard.styles.scss";

const TeamCard = ({ team, imageUrl, color, players, teamColor, teamsData, addPlayersInfo}) => {
  return (
    <div className="directory-item">
      <div className="directory-item__heading-box " style={{backgroundColor: `${color}`}}>
        <h3 className={`directory-item__heading ${teamColor ? 'directory-item__heading--black' :  ""}` } >{team}</h3>
      </div>
      <div className="directory-item__grey-box" onClick={() => addPlayersInfo(teamsData[0])}>
        <p className="directory-item__player">{players[0]}</p>
      </div>
      <div className="directory-item__white-box" onClick={() => addPlayersInfo(teamsData[1])}>
        <p className="directory-item__player">{players[1]}</p>
      </div>
      <div className="directory-item__grey-box" onClick={() => addPlayersInfo(teamsData[2])} >
        <p className="directory-item__player">{players[2]}</p>
      </div>
      <div className="directory-item__white-box"  onClick={() => addPlayersInfo(teamsData[3])} >
        <p className="directory-item__player">{players[3]}</p>
      </div>
      <div className="directory-item__grey-box" onClick={() => addPlayersInfo(teamsData[4])}>
        <p className="directory-item__player">{players[4]}</p>
      </div>
      <div className="directory-item__logo" style={{backgroundImage: `url(${imageUrl})`}}> 
      </div> 
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPlayersInfo: info => dispatch(addPlayersInfo(info))
})


export default connect(null, mapDispatchToProps)(TeamCard);
