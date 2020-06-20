import settingsActionTypes from "./settings.types";

import { addCrosshairToFavorite } from "./settings.utils";

const INITIAL_STATE = {
  copied: false,
  saved: false,
  favoriteCrosshairs: [],
  favoriteSettings: [],
};

const settingsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case settingsActionTypes.TOGGLE_COPIED:
      return {
        ...state,
        copied: action.payload,
      };
    case settingsActionTypes.TOGGLE_SAVED:
      return {
        ...state,
        saved: action.payload,
      };
    case settingsActionTypes.ADD_CROSSHAIR:
      return {
        ...state,
        favoriteCrosshairs: addCrosshairToFavorite(
          state.favoriteCrosshairs,
          action.payload
        ),
      };
    case settingsActionTypes.ADD_SETTINGS:
      return {
        ...state,
        favoriteSettings: addCrosshairToFavorite(
          state.favoriteSettings,
          action.payload
        ),
      };
    default:
      return state;
  }
};

export default settingsReducer;
