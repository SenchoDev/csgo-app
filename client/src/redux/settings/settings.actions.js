import settingsActionTypes from "./settings.types";


export const toggleCopiedButton = (boolVal) => ({
  type: settingsActionTypes.TOGGLE_COPIED,
  payload: boolVal
})