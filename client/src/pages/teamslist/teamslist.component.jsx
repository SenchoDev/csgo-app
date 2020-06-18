import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TeamsDirectory from '../../components/teams-directory/teams-directory.component'

import { fetchTeamsStart } from '../../redux/teams/teams.actions'

import './teamslist.styles.scss'

const TeamsList = ({ fetchTeamsStart }) => {

  // useEffect(() => {
  //   fetchTeamsStart();
  // }, [fetchTeamsStart]);

  return (
    <div className="teams-page">
      <h3 className="teams-page__heading">Top 30 Teams</h3>
      <TeamsDirectory/>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  fetchTeamsStart: () => dispatch(fetchTeamsStart()),
})

export default connect(null, mapDispatchToProps)(TeamsList);