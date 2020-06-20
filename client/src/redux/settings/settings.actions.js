import settingsActionTypes from "./settings.types";

export const toggleCopiedButton = (boolVal) => ({
  type: settingsActionTypes.TOGGLE_COPIED,
  payload: boolVal
})
export const toggleSavedButton = (boolVal) => ({
  type: settingsActionTypes.TOGGLE_SAVED,
  payload: boolVal
})
export const addCrosshair = item => ({
  type: settingsActionTypes.ADD_CROSSHAIR,
  payload: item,
});
