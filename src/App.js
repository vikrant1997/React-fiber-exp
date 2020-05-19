import React from "react";

import { Canvas } from "react-three-fiber";

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
      <div
        style={{
          height: "100px",
          width: "100px",
          position: "fixed",
          zIndex: "10",
          backgroundColor: "white",
          left: "10px",
          bottom: "10px",
        }}
      >
        "HEY"
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
