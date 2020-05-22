import React, { useRef, useEffect } from "react";
import Lights from "../components/Lights";
import { useThree, useFrame, useLoader } from "react-three-fiber";
import Room from "../components/Room";
import { Color } from "three";
import * as THREE from "three";
import Bird from "../components/Bird";
import Bird2 from "../components/Bird2";
import url from "../assets/flamingo.glb";

function Scene() {
  const { scene, camera } = useThree();
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
    light.current.shadow.camera.bottom = -100;

    scene.add(light.current.target);
    //comment this if helper not required
    scene.add(new THREE.CameraHelper(light.current.shadow.camera));
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
        {/* <Bird position={[0, 50, 150]} speed={1} factor={0.5} url={url} /> */}
        <Bird2 position={[-150, 50, 0]} />
      </React.Suspense>
    </>
    // </mesh>
  );
}

export default Scene;
