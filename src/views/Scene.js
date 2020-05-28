import React, { useRef, useEffect } from "react";
import { useThree, useFrame, useLoader } from "react-three-fiber";
import Room from "../components/Room";
import { Color, AxesHelper } from "three";
import Bird2 from "../components/Bird2";
import Car from "../components/Car";
// import cameraStore from "../zustand/cameraStore";

import { CameraHelper } from "three";
import Grass from "components/Grass";

function Scene({ cameraStore }) {
  console.log("scene Render");

  const { scene, camera } = useThree();
  scene.background = new Color("lightblue");
  const { storedCamera, setCamera } = cameraStore;

  const light = useRef();
  const light2 = useRef();

  // console.log(storedCamera);

  useEffect(() => {
    // light2.current.castShadow = true;
    // light2.current.target.position.set(-100, 0, 150);
    // light2.current.shadow.camera.far = 150;

    light.current.castShadow = true;
    light.current.shadow.camera.visible = false;
    light.current.shadow.camera.far = 800;
    light.current.shadow.camera.right = 300;
    light.current.shadow.camera.left = -300;
    light.current.shadow.camera.top = 400;
    light.current.target.position.set(100, 0, 0);
    light.current.shadow.camera.bottom = -100;

    scene.add(light.current.target);
    var axesHelper = new AxesHelper(1000);
    scene.add(axesHelper);
    //comment this if helper not required
    scene.add(new CameraHelper(light.current.shadow.camera));
  }, []);
  //comment this if helper not required
  // scene.add(new CameraHelper(camera));

  return (
    <>
      <directionalLight
        ref={light}
        intensity={2}
        position={[-300, 200, 0]}
        visible={true}
        // castShadow={true}

        // target={Room}
      />
      {/* <pointLight
        ref={light2}
        intensity={3}
        position={[-100, 100, -150]}
        visible={true}
        // castShadow={true}

        // target={Room}
      /> */}

      <ambientLight intensity={0.5} position={[0, 200, 0]} />

      <mesh position={[0, 13, 0]} receiveShadow={true} castShadow={true}>
        <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
        <meshPhongMaterial attach="material" />
      </mesh>
      {/* <mesh position={[20, 13, -150]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh> */}
      <mesh
        position={[-20, 0, 150]}
        receiveShadow={true}
        castShadow={true}
        scale={[1, 2, 1]}
      >
        <boxBufferGeometry attach="geometry" args={[2, 50, 25]} />
        <meshPhongMaterial attach="material" />
      </mesh>
      {/* bottom grass */}
      <Grass />

      <Room position={[0, 0, 0]} />
      <Room position={[200, 100, 200]} />
      <Room position={[200, 100, -200]} />

      <Bird2 position={[-150, 50, 0]} />
      <Car position={[-100, 0, -150]} />
    </>
  );
}

export default Scene;
