import React, { useRef } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Controls() {
  const controlsRef = useRef();
  const { camera, gl } = useThree();

  useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={true}
      maxZoom={0}
      minZoom={10}
      //   enableRotate={false}
      enablePan={false}
      maxDistance={200}
      minDistance={0}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2}
      //   minAzimuthAngle={0}
      //   maxAzimuthAngle={0}
    />
  );
}

export default Controls;
