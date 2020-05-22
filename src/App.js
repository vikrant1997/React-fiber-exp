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
  const [moveIn, setmoveIn] = useState(false);
  const [moveOut, setmoveOut] = useState(false);
  const [moveTop, setmoveTop] = useState(false);
  const [moveDown, setmoveDown] = useState(false);

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
          onMouseDown={() => setmoveIn(true)}
          onMouseUp={() => setmoveIn(false)}
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
      </div>

      <Canvas shadowMap={{ enabled: "true" }}>
        <Scene />
        <Controls
          moveLeft={moveLeft}
          moveRight={moveRight}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          moveIn={moveIn}
          moveOut={moveOut}
          moveTop={moveTop}
          moveDown={moveDown}
        />
      </Canvas>
    </>
  );
}
export default App;
