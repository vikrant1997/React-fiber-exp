import React, { useRef, useEffect } from "react";
import { useThree, useFrame, useLoader } from "react-three-fiber";
import Room from "../components/Room";
import { Color } from "three";
import Bird2 from "../components/Bird2";
import Car from "../components/Car";

function Scene() {
  const { scene, camera } = useThree();
  scene.background = new Color("lightblue");

  const light = useRef();
  const light2 = useRef();
  useEffect(() => {
    // light2.current.castShadow = true;
    // light2.current.target.position.set(-100, 0, 150);
    // light2.current.shadow.camera.far = 150;

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
    // scene.add(new THREE.CameraHelper(light.current.shadow.camera));
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
      {/* <pointLight
        ref={light2}
        intensity={3}
        position={[-100, 100, -150]}
        visible={true}
        // castShadow={true}

        // target={Room}
      /> */}
      {/* <directionalLight
        ref={light}
        intensity={2}
        position={[-300, 200, 0]}
        visible={true}
        // castShadow={true}

        // target={Room}
      /> */}
      <ambientLight intensity={0.5} position={[0, 200, 0]} />

      <React.Suspense fallback={<mesh />}>
        <mesh position={[0, 13, 0]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh>
        {/* <mesh position={[20, 13, -150]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh> */}
        <mesh position={[-20, 13, 150]} receiveShadow={true} castShadow={true}>
          <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
          <meshPhongMaterial attach="material" />
        </mesh>
        <Room />
        {/* <Bird position={[0, 50, 150]} speed={1} factor={0.5} url={url} /> */}
        <Bird2 position={[-150, 50, 0]} />
        <Car position={[-100, 0, -150]} />
      </React.Suspense>
    </>
    // </mesh>
  );
}

export default Scene;
