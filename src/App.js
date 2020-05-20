import React from "react";

import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./views/Scene";
import Controls from "./components/Controls";

function App() {
  var moveForward = false;
  var moveBackward = false;
  var moveLeft = false;
  var moveRight = false;
  var canJump = false;
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

      <Canvas>
        <Scene />
        <Controls
          moveForward={moveForward}
          moveBackward={moveBackward}
          moveLeft={moveLeft}
          moveRight={moveRight}
        />
      </Canvas>
    </>
  );
}
export default App;
