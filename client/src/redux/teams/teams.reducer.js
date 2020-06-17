import TeamsActionTypes from "./teams.types";

const INITIAL_STATE = {
  teams: null,
  isFetching: false,
  errorMessage: undefined,
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
