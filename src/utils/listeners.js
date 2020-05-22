function initialiseListeners(
  // startZoomIn,
  // stopZoomIn,
  startZoomOut,
  stopZoomOut,
  startLeft,
  stopLeft,
  startRight,
  stopRight
) {
  // document
  //   .getElementById("zoomButton")
  //   .addEventListener("mousedown", startZoomIn, false);
  // document
  //   .getElementById("zoomButton")
  //   .addEventListener("mouseup", stopZoomIn, false);
  document
    .getElementById("zoomOutButton")
    .addEventListener("mousedown", startZoomOut, false);
  document
    .getElementById("zoomOutButton")
    .addEventListener("mouseup", stopZoomOut, false);

  document
    .getElementById("leftButton")
    .addEventListener("mousedown", startLeft, false);
  document
    .getElementById("leftButton")
    .addEventListener("mouseup", stopLeft, false);
  document
    .getElementById("rightButton")
    .addEventListener("mousedown", startRight, false);
  document
    .getElementById("rightButton")
    .addEventListener("mouseup", stopRight, false);
}
export default initialiseListeners;
