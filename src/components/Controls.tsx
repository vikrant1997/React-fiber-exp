import React, { useRef, useEffect, useState } from "react";

import { extend, useThree, useFrame, ReactThreeFiber } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

import controlStore from "../zustand/controlStore";
import cameraStore from "../zustand/cameraStore";

extend({ OrbitControls, PointerLockControls, FirstPersonControls });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: ReactThreeFiber.Object3DNode<
        OrbitControls,
        typeof OrbitControls
      >;
      firstPersonControls: ReactThreeFiber.Object3DNode<
        FirstPersonControls,
        typeof FirstPersonControls
      >;
    }
  }
}
function Controls() {
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

  const { gl, setDefaultCamera } = useThree();

  const camera = storedCamera;
  const controlsRef = useRef<OrbitControls>();

  const firstPersonControlsRef = useRef<FirstPersonControls>();

  useEffect(() => {
    camera.position.set(0, 10, 100);
    camera.far = 20000;

    setDefaultCamera(camera);
    if (fPControl) {
      firstPersonControlsRef.current!.enabled = fPControl;
    }
    if (oPControl) {
      controlsRef.current!.enabled = oPControl;
    }
  }, [fPControl, oPControl]);

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
      camera.position.x -= 10;
    }
    if (moveRight) {
      camera.position.x += 10;
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

  return (
    <>
      {/* <pointerLockControls
        ref={pointerControlsRef}
        args={[camera, domElement]}
      /> */}
      {fPControl ? (
        <firstPersonControls
          ref={firstPersonControlsRef}
          args={[camera, gl.domElement]}
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
        <orbitControls
          ref={controlsRef}
          args={[camera, gl.domElement]}
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

export default Controls;
