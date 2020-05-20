import React, { useRef, useEffect } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
// import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import * as THREE from "three";
extend({ OrbitControls });

function Controls({ moveForward, moveBackward, moveLeft, moveRight }) {
  const {
    camera,

    gl: { domElement },
    setDefaultCamera,
  } = useThree();

  useEffect(() => {
    // camera.fov = 1;
    // camera.aspect = 2;
    // camera.near = 0.1;
    // camera.far = 1;
    console.log(camera.isOrthographicCamera);
    console.log(camera.isPerspectiveCamera);
    // console.log(camera.setFocalLength(8));

    console.log(camera.fov);

    camera.position.set(0, 10, 100);

    setDefaultCamera(camera);
  }, []);

  var zoomIn = false;
  var zoomOut = false;
  var moveLeft = false;
  var moveRight = false;

  const controlsRef = useRef();

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
    console.log(camera.type);

    console.log("startingLeft");
    moveLeft = true;
  }
  function startRight(event) {
    console.log(camera.type);

    console.log(event);
    moveRight = true;
  }

  document
    .getElementById("zoomButton")
    .addEventListener("mousedown", startZoomIn, false);
  document
    .getElementById("zoomButton")
    .addEventListener("mouseup", stopZoomIn, false);
  document
    .getElementById("zoomOutButton")
    .addEventListener("mousedown", startZoomOut, false);
  document
    .getElementById("zoomOutButton")
    .addEventListener("mouseup", stopZoomOut, false);

  document
    .getElementById("leftButton")
    .addEventListener("mousedown", startLeft, false);
  document
    .getElementById("rightButton")
    .addEventListener("mousedown", startRight, false);

  useFrame(() => {
    if (zoomIn) {
      // camera.position.set(0, 20, 100);
      // camera.fov = 1;
      camera.fov -= 1;
    }
    if (zoomOut) {
      camera.fov += 1;
      // camera.updateProjectionMatrix();
    }
    if (moveLeft) {
      // camera.fov += 1;
    }
    camera.updateProjectionMatrix();
    controlsRef.current.update();
  });

  // return <></>;
  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      // enabled={true}
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
