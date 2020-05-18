import React, { useRef } from "react";

import { useThree, useFrame } from "react-three-fiber";

function Controls2() {
  const controlsRef = useRef();

  const { camera, gl } = useThree();

  camera.position.set(0, 0, 20);
  camera.far = 1100;
  camera.near = 1;
  camera.fov = 75;

  useFrame(() => controlsRef.current && controlsRef.current.update());

  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, gl.domElement]}
      enableZoom={true}
      enablePan={false}
    />
  );
}

export default Controls2;
