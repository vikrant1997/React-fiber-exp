import React, { useState } from "react";

import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./views/Scene";
import Controls from "./components/Controls";

function App() {
  const [moveLeft, setmoveLeft] = useState(false);
  const [moveRight, setmoveRight] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);
  const [zoomOut, setZoomOut] = useState(false);
  const [moveForward, setmoveForward] = useState(false);
  const [moveOut, setmoveOut] = useState(false);
  const [moveTop, setmoveTop] = useState(false);
  const [moveDown, setmoveDown] = useState(false);
  // const [mouseLook, setmouseLook] = useState(false);
  const [pointerLock, setPointerLock] = useState(false);
  const [fPControl, setFpControl] = useState(false);
  const [oPControl, setOpControl] = useState(true);

  return (
    <>
      <div className="controls">
        <button
          onMouseDown={() => setmoveTop(true)}
          onMouseUp={() => setmoveTop(false)}
        >
          Up
        </button>

        <button
          onMouseDown={() => setmoveLeft(true)}
          onMouseUp={() => setmoveLeft(false)}
        >
          Left
        </button>
        <button
          onMouseDown={() => setmoveRight(true)}
          onMouseUp={() => setmoveRight(false)}
        >
          Right
        </button>

        <button
          onMouseDown={() => setmoveDown(true)}
          onMouseUp={() => setmoveDown(false)}
        >
          Down
        </button>

        <button
          onMouseDown={() => setmoveForward(true)}
          onMouseUp={() => setmoveForward(false)}
        >
          Forward
        </button>
        <button
          onMouseDown={() => setmoveOut(true)}
          onMouseUp={() => setmoveOut(false)}
        >
          Back
        </button>

        <button
          onMouseDown={() => setZoomIn(true)}
          onMouseUp={() => setZoomIn(false)}
        >
          Zoom In
        </button>
        <button
          onMouseDown={() => setZoomOut(true)}
          onMouseUp={() => setZoomOut(false)}
        >
          Zoom Out
        </button>
        <button
          onClick={() => {
            setFpControl(true);
            setOpControl(false);
          }}
        >
          FpControl
        </button>
        <button
          onClick={() => {
            setOpControl(true);
            setFpControl(false);
          }}
        >
          OpControl
        </button>
        {/* <button
          onMouseDown={() => setmouseLook(true)}
          onMouseUp={() => setmouseLook(false)}
        >
          Disable Mouse
        </button> */}
        {/* <button onClick={() => setPointerLock(!pointerLock)}>GameMode</button> */}
      </div>

      <Canvas
        shadowMap={{ enabled: "true" }}
        onClick={() => setPointerLock(!pointerLock)}
      >
        <Scene />
        <Controls
          moveLeft={moveLeft}
          moveRight={moveRight}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          moveForward={moveForward}
          moveOut={moveOut}
          moveTop={moveTop}
          moveDown={moveDown}
          // mouseLook={mouseLook}
          pointerLock={pointerLock}
          fPControl={fPControl}
          oPControl={oPControl}
        />
      </Canvas>
    </>
  );
}
export default App;
