export const addCrosshairToFavorite = (favoriteCrosshairs, crosshairToAdd) => {
  const existingCrosshair = favoriteCrosshairs.find(crosshair => crosshair.id === crosshairToAdd.id);
  if(existingCrosshair) return favoriteCrosshairs;
  return [...favoriteCrosshairs, {...crosshairToAdd}];
}