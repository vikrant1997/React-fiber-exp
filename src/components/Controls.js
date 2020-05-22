import React, { useRef, useEffect } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";
import initialiseListeners from "../utils/listeners";
import * as THREE from "three";

extend({ OrbitControls, PointerLockControls, FirstPersonControls });

function Controls({
  zoomIn,
  moveIn,
  moveOut,
  moveTop,
  moveDown,
  moveLeft,
  moveRight,
  zoomOut,
}) {
  console.log("controls render");

  const {
    camera,
    gl: { domElement },
    setDefaultCamera,
    scene,
    // clock,
  } = useThree();
  const controlsRef = useRef();
  // const firstPersonControlsRef = useRef();
  var clock = new THREE.Clock();
  useEffect(() => {
    clock.start();
    camera.position.set(0, 10, 100);
    camera.far = 20000;
    console.log(camera.fov);

    setDefaultCamera(camera);
    // controlsRef.current.target.set(0, 100, 100);
    // controlsRef.current.center = new THREE.Vector3(0, 100, 100);
  }, []);

  useFrame(() => {
    if (zoomIn) {
      if (camera.fov > 10) {
        camera.fov -= 1;
      }
    }
    if (zoomOut) {
      if (camera.fov < 90) {
        camera.fov += 1;
      }
    }
    if (moveLeft) {
      // camera.position.x -= 10;
      camera.translateX(-10);
    }
    if (moveRight) {
      // camera.position.x += 10;
      camera.translateX(10);
      // camera.translateY(10);
    }
    if (moveIn) {
      camera.position.z -= 10;
    }
    if (moveOut) {
      camera.position.z += 10;
    }
    if (moveTop) {
      camera.position.y += 10;
    }

    if (moveDown) {
      camera.position.y -= 10;
    }

    camera.updateProjectionMatrix();
    // console.log(clock.getDelta());
    // console.log(clock.getDelta());

    // firstPersonControlsRef.current.update(clock.getDelta() * 300);
    controlsRef.current.update();
  });

  // return <></>;
  return (
    <>
      {/* <firstPersonControls
        ref={firstPersonControlsRef}
        args={[camera, domElement]}
        activeLook={true}
        // autoForward={true}
        constrainVertical={true}
        // heightMax={0.1}
        lookSpeed={0.01}
        movementSpeed={70}
        noFly={true}
        verticalMax={Math.PI / 2}
        vericalMin={Math.PI / 2}
        lookVertical={true}
      /> */}
      <orbitControls
        ref={controlsRef}
        args={[camera, domElement]}
        enableZoom={true}
        maxZoom={100}
        minZoom={10}
        // enablePan={true}
        maxDistance={1000}
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        zoomSpeed={0.5}
        enableDamping={true}
        screenSpacePanning={true}
        keyPanSpeed={40}
      />
    </>
  );
}

export default Controls;
