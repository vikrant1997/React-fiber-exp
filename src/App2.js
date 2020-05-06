import React, { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import Lights from "./components/Lights";

import { Canvas } from "react-three-fiber";

import Scene2 from "./views/Scene2";

function App2() {
  const ref = useRef();

  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 75, near: 0.1, far: 100, aspect: 2 }}
    >
      <Lights
        type="AmbientLight"
        color={0xffffff}
        intensity={1}
        position={[0, 0, 0]}
      />
      <React.Suspense fallback={null} ref={ref}>
        <Scene2 />
      </React.Suspense>
    </Canvas>
  );
}
export default App2;
