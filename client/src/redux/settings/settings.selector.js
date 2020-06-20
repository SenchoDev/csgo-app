import { createSelector } from "reselect";

const selectSettingsData = (state) => state.settingsData;

export const selectIfCopied = createSelector(
  [selectSettingsData],
  (settings) => settings.copied
)
export const selectFavoriteCrosshairs = createSelector(
  [selectSettingsData],
  (settings) => settings.favoriteCrosshairs
)

