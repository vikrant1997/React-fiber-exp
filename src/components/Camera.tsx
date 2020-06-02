import React, { useRef, useEffect, useState } from "react";

import { extend, useThree, useFrame, ReactThreeFiber } from "react-three-fiber";
import { PerspectiveCamera } from "three";
import cameraStore from "../zustand/cameraStore";

type CameraProps = {
  position: [number, number, number];
};

const Camera: React.FC<CameraProps> = ({ position }) => {
  const { storedCamera, setCamera } = cameraStore();
  const ref = React.useRef<PerspectiveCamera>(null);
  const { setDefaultCamera } = useThree();
  // Make the camera known to the system

  useEffect(() => {
    console.log("camera");

    console.log(ref.current);

    // setCamera(ref);
    //@ts-ignore
    void setDefaultCamera(ref.current);
  }, []);
  // Update it every frame
  useFrame(() => ref.current!.updateMatrixWorld());
  return <perspectiveCamera ref={ref} position={position} />;
};
export default Camera;
