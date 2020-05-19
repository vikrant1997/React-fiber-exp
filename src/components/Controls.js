import React, { useRef } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import * as THREE from "three";
extend({ OrbitControls, FirstPersonControls });

function Controls({ moveForward, moveBackward, moveLeft, moveRight }) {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  camera.is = true;
  camera.fov = 45;
  camera.aspect = 2;
  camera.near = 0.1;
  camera.far = 10;

  const controlsRef = useRef();

  // document.addEventListener("keydown", onKeyDown, false);
  // document.addEventListener("keyup", onKeyUp, false);

  // camera.up.set(0, 0, 1);
  camera.position.set(0, 0, 100);

  // useFrame(() => controlsRef.current && controlsRef.current.update());
  useFrame(() => {
    // controlsRef.current.target.set(0, 10, 0);
    controlsRef.current.target.set(0, 10, 0);
    controlsRef.current.update();
  });

  // return <></>;
  return (
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      // enabled={true}
      enableZoom={true}
      maxZoom={1000}
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

// function onKeyDown(event) {
//   // console.log(moveForward);
//   // console.log(moveForward);

//   switch (event.keyCode) {
//     case 38: // up
//     case 87: // w
//       moveForward = true;
//       break;

//     case 37: // left
//     case 65: // a
//       moveLeft = true;
//       break;

//     case 40: // down
//     case 83: // s
//       moveBackward = true;
//       break;

//     case 39: // right
//     case 68: // d
//       moveRight = true;
//       break;

//     default:
//       return;
//   }
// }
// function onKeyUp(event) {
//   switch (event.keyCode) {
//     case 38: // up
//     case 87: // w
//       moveForward = false;
//       break;

//     case 37: // left
//     case 65: // a
//       moveLeft = false;
//       break;

//     case 40: // down
//     case 83: // s
//       moveBackward = false;
//       break;

//     case 39: // right
//     case 68: // d
//       moveRight = false;
//       break;
//     default:
//       return;
//   }
// }
