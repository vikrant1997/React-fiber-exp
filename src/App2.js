import React, { Suspense, useRef, useMemo } from "react";
import * as THREE from "three";
import Lights from "./components/Lights";

import { Canvas } from "react-three-fiber";
import Controls from "./components2/Controls2";

import SkyBox from "./components2/SkyBox";

function App2() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <SkyBox />
      </Suspense>
      <Controls />
    </Canvas>
  );
}
export default App2;
