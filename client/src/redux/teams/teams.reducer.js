import TeamsActionTypes from "./teams.types";

import TEAMS_DATA from './teams.data'

const INITIAL_STATE = {
  teams: TEAMS_DATA,
  isFetching: false,
  errorMessage: undefined,
  playersInfo: false,
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamsActionTypes.ADD_PLAYERS_INFO:
      return {
        ...state,
        playersInfo: action.payload
      };
    case TeamsActionTypes.FETCH_TEAMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TeamsActionTypes.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teams: action.payload,
      };
    case TeamsActionTypes.FETCH_TEAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
