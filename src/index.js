import ReactDOM from "react-dom";
import React from "react";
import App from "App";
import "./index.css";
import { Provider, inject, observer } from "mobx-react";

import ControlStore from "./mst/controlStore";
import CameraStore from "./mst/cameraStore";
import { getSnapshot } from "mobx-state-tree";

const controlStore = ControlStore.create();
const cameraStore = CameraStore.create();

ReactDOM.render(
  <Provider controlStore={controlStore} cameraStore={cameraStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
