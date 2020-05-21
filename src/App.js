import React from "react";

import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./views/Scene";
import Controls from "./components/Controls";

function App() {
  return (
    <>
      <div className="controls">
        <button id="leftButton" className="button">
          Left
        </button>
        <button id="rightButton" className="button">
          Right
        </button>
        <button id="zoomButton" className="button">
          Zoom In
        </button>
        <button id="zoomOutButton" className="button">
          Zoom Out
        </button>
      </div>

      <Canvas shadowMap={{ enabled: "true" }}>
        <Scene />
        <Controls />
      </Canvas>
    </>
  );
}
export default App;
