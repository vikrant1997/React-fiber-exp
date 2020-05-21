import React, { useRef, useEffect } from "react";
import Lights from "../components/Lights";
import { useThree, useFrame } from "react-three-fiber";
import Room from "../components/Room";
import { Color } from "three";
import * as THREE from "three";

function Scene() {
  const { scene } = useThree();
  scene.background = new Color("lightblue");

  const light = useRef();
  useEffect(() => {
    light.current.castShadow = true;
    light.current.shadow.camera.visible = false;
    light.current.shadow.camera.far = 500;
    light.current.shadow.camera.right = 200;
    light.current.shadow.camera.left = -200;
    light.current.shadow.camera.top = 110;
    light.current.target.position.set(100, 0, 0);
    light.current.shadow.camera.bottom = -50;

    scene.add(light.current.target);
    //comment this if helper not required
    // scene.add(new THREE.CameraHelper(light.current.shadow.camera));

    // console.log(light.current.shadow.mapSize);
    // console.log(light.current.target.position);
  }, []);
  //comment this if helper not required
  // scene.add(new THREE.CameraHelper(camera));

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
      <ambientLight intensity={0.5} position={[0, 200, 0]} />

      <React.Suspense fallback={<mesh />}>
        <mesh position={[0, 13, 0]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh>
        <mesh position={[20, 13, -150]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh>
        <mesh position={[-20, 13, 150]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh>
        <Room />
      </React.Suspense>
    </>
    // </mesh>
  );
}

export default Scene;
