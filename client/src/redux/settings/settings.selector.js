import { createSelector } from "reselect";

const selectSettingsData = (state) => state.settingsData;

export const selectIfCopied = createSelector(
  [selectSettingsData],
  (settings) => settings.copied
)
