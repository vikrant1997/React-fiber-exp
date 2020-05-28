import React, { useRef, useEffect, useState } from "react";

import { extend, useThree, useFrame } from "react-three-fiber";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

extend({ OrbitControls, PointerLockControls, FirstPersonControls });

function Controls({ cameraStore, controlStore }) {
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
  } = controlStore;
  const { storedCamera, setCamera } = cameraStore;

  const {
    camera,
    gl: { domElement },
    setDefaultCamera,
    scene,
  } = useThree();

  const controlsRef = useRef();
  // const pointerControlsRef = useRef();
  const firstPersonControlsRef = useRef();

  useEffect(() => {
    camera.position.set(0, 10, 100);
    camera.far = 20000;
    // console.log(camera.fov);

    setDefaultCamera(camera);
    if (fPControl) {
      firstPersonControlsRef.current.enabled = fPControl;
    }
    if (oPControl) {
      controlsRef.current.enabled = oPControl;
    }
    console.log(camera);

    setCamera(camera);

    // controlsRef.current.target.set(0, 100, 100);
    // controlsRef.current.center = new THREE.Vector3(0, 100, 100);
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
      controlsRef.current.update();
    }
    if (fPControl) {
      firstPersonControlsRef.current.update(1);
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
export default Controls;
// export default inject("store")(observer(Controls));
