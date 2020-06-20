import settingsActionTypes from "./settings.types";

const INITIAL_STATE = {
  crosshair: null,
  copied: false,
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingsActionTypes.ADD_CROSSHAIR:
      return {
        ...state,
        crosshair: action.payload,
      };
    case settingsActionTypes.TOGGLE_COPIED:
      return {
        ...state,
        copied: action.payload,
      };
    default:
      return state;
  }
};

export default settingsReducer;
