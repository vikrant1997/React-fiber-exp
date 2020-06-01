import React, { useState } from "react";

import { Canvas } from "react-three-fiber";
import "./App.css";
import Scene from "./views/Scene";
import Controls from "./components/Controls";
import controlStore from "./zustand/controlStore";

function App() {
  const {
    setmoveLeft,
    setmoveTop,
    setmoveRight,
    setmoveDown,
    setmoveForward,
    setmoveOut,
    setZoomIn,
    setZoomOut,
    setFpControl,
    setOpControl,
    setPointerLock,
  } = controlStore();

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

      <Canvas shadowMap={{ enabled: "true" }} onClick={() => setPointerLock()}>
        <React.Suspense fallback={<mesh />}>
          <Scene />
          <Controls />
        </React.Suspense>
      </Canvas>
    </>
  );
}
export default App;
