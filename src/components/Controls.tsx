// @ts-ignore-file
import React, { useRef, useEffect, useState } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import controlStore from "../zustand/controlStore";
import cameraStore from "../zustand/cameraStore";
import { PerspectiveCamera } from "three";

extend({ OrbitControls, PointerLockControls, FirstPersonControls });

function Controls() {
  // console.log("controls render");

  const {
    zoomIn,
    moveForward,
    moveOut,
    moveTop,
    moveDown,
    moveLeft,
    moveRight,
    zoomOut,
    // mouseLook,
    pointerLock,
    oPControl,
    fPControl,
  } = controlStore();
  const { storedCamera, setCamera } = cameraStore();

  const {
    camera,
    gl: { domElement },
    setDefaultCamera,
  } = useThree();
  // @ts-ignore-start
  const controlsRef = useRef<OrbitControls>();
  // const pointerControlsRef = useRef();
  const firstPersonControlsRef = useRef<FirstPersonControls>();

  useEffect(() => {
    camera.position.set(0, 10, 100);
    camera.far = 20000;

    camera.type = "PerspectiveCamera";

    console.log(camera.type);

    setDefaultCamera(camera);
    if (fPControl) {
      firstPersonControlsRef.current!.enabled = fPControl;
    }
    if (oPControl) {
      controlsRef.current!.enabled = oPControl;
    }
    setCamera(camera);

    // controlsRef.current.target.set(0, 100, 100);
    // controlsRef.current.center = new THREE.Vector3(0, 100, 100);
  }, [fPControl, oPControl]);

  useFrame(() => {
    if (zoomIn) {
      // @ts-ignore
      if (camera.fov > 10) {
        // @ts-ignore
        camera.fov -= 1;
      }
    }
    if (zoomOut) {
      // @ts-ignore
      if (camera.fov < 90) {
        // @ts-ignore
        camera.fov += 1;
      }
    }
    if (moveLeft) {
      camera.position.x -= 10;
      // camera.translateX(-10);
    }
    if (moveRight) {
      camera.position.x += 10;
      // camera.translateX(10);
      // camera.translateY(10);
    }
    if (moveForward) {
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
    if (oPControl) {
      controlsRef.current!.update();
    }
    if (fPControl) {
      firstPersonControlsRef.current!.update(1);
    }
    // if (mouseLook) {
    //   firstPersonControlsRef.current.activeLook = false;
    // }
    // if (pointerLock) {
    //   console.log("game mode entered");

    //   pointerControlsRef.current.lock();
    // }

    camera.updateProjectionMatrix();
  });

  // return <></>;
  return (
    <>
      {/* <pointerLockControls
        ref={pointerControlsRef}
        args={[camera, domElement]}
      /> */}
      {fPControl ? (
        // @ts-ignore
        <firstPersonControls
          ref={firstPersonControlsRef}
          args={[camera, domElement]}
          // activeLook={true}
          // autoForward={true}
          // constrainVertical={true}
          // heightMax={0.1}
          lookSpeed={0.001}
          movementSpeed={1}
          enabled={fPControl}
          // noFly={true}
          verticalMax={Math.PI / 2}
          // vericalMin={Math.PI / 2}
          // lookVertical={true}
        />
      ) : (
        <></>
      )}

      {oPControl ? (
        // @ts-ignore
        <orbitControls
          ref={controlsRef}
          args={[camera, domElement]}
          enableZoom={true}
          maxZoom={100}
          minZoom={10}
          enabled={oPControl}
          // enablePan={true}
          maxDistance={1000}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          zoomSpeed={0.5}
          enableDamping={true}
          screenSpacePanning={true}
          keyPanSpeed={40}
        />
      ) : (
        <></>
      )}
    </>
  );
}
// @ts-ignore-end
export default Controls;
