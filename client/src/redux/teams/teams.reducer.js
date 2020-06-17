import TeamsActionTypes from './teams.types';
import TEAMS_DATA from './teams.data'

const INITIAL_STATE = {
  teams: TEAMS_DATA,
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default teamsReducer;
