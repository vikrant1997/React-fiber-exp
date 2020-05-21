import React, { useRef, useEffect } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import initialiseListeners from "../utils/listeners";
import * as THREE from "three";

extend({ OrbitControls });

function Controls() {
  const {
    camera,
    gl: { domElement },
    setDefaultCamera,
  } = useThree();

  useEffect(() => {
    console.log(camera.isOrthographicCamera);
    console.log(camera.isPerspectiveCamera);

    console.log(camera.fov);

    camera.position.set(0, 10, 100);
    camera.far = 20000;

    setDefaultCamera(camera);
  }, []);

  var zoomIn = false;
  var zoomOut = false;
  var moveLeft = false;
  var moveRight = false;

  const controlsRef = useRef();

  // function Events(zoomIn,zoomOut,moveLeft,moveRight);

  function startZoomIn(event) {
    console.log(camera.type);

    console.log(event);
    zoomIn = true;
  }
  function stopZoomIn(event) {
    zoomIn = false;
  }
  function startZoomOut(event) {
    zoomOut = true;
  }
  function stopZoomOut(event) {
    zoomOut = false;
  }

  function startLeft(event) {
    console.log("startingLeft");
    moveLeft = true;
  }
  function stopLeft(event) {
    console.log("startingLeft");
    moveLeft = false;
  }
  function startRight(event) {
    moveRight = true;
  }
  function stopRight(event) {
    console.log("startingLeft");
    moveRight = false;
  }
  initialiseListeners(
    startZoomIn,
    stopZoomIn,
    startZoomOut,
    stopZoomOut,
    startLeft,
    stopLeft,
    startRight,
    stopRight
  );

  useFrame(() => {
    if (zoomIn) {
      camera.fov -= 1;
    }
    if (zoomOut) {
      camera.fov += 1;
    }
    if (moveLeft) {
      camera.position.x -= 10;
    }
    if (moveRight) {
      camera.position.x += 10;
    }
    camera.updateProjectionMatrix();
    controlsRef.current.update();
  });

  // return <></>;
  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      enableZoom={true}
      maxZoom={100}
      minZoom={10}
      enablePan={true}
      maxDistance={1000}
      minPolarAngle={0}
      maxPolarAngle={Math.PI / 2}
      zoomSpeed={0.5}
      enableDamping={true}
      screenSpacePanning={false}
      keyPanSpeed={40}
    />
  );
}

export default Controls;
