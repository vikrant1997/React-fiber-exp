import React, { useRef, useEffect } from "react";
import { useThree, useFrame, useLoader } from "react-three-fiber";
import Room from "../components/Room";
import { Color, AxesHelper, CameraHelper } from "three";
import Bird2 from "../components/Bird2";
import Car from "../components/Car";
import cameraStore from "../zustand/cameraStore";

import Grass from "components/Grass";
import { Detailed, Sphere, Plane } from "drei";

function Scene() {
  console.log("scene Render");
  // console.log(Sphere);

  const { scene, camera } = useThree();
  scene.background = new Color("lightblue");
  const { storedCamera, setCamera } = cameraStore();

  const light = useRef();
  const light2 = useRef();
  const car = useRef();

  useEffect(() => {
    // light2.current.castShadow = true;
    // light2.current.target.position.set(-100, 0, 150);
    // light2.current.shadow.camera.far = 150;

    light.current.castShadow = true;
    light.current.shadow.camera.visible = false;
    light.current.shadow.camera.far = 500;
    light.current.shadow.camera.right = 200;
    light.current.shadow.camera.left = -200;
    light.current.shadow.camera.top = 200;
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
      <Detailed distances={[0, 50, 150]} position={[0, 100, 0]}>
        <Plane args={[10, 10]} />
        <Sphere args={[20, 20, 20]}>
          <meshBasicMaterial attach="material" color="hotpink" />
        </Sphere>
        <Sphere args={[50, 50, 50]}>
          <meshBasicMaterial attach="material" color="yellow" />
        </Sphere>
      </Detailed>
      <mesh
        position={[-20, 0, 150]}
        receiveShadow={true}
        castShadow={true}
        scale={[1, 2, 1]}
      >
        <boxBufferGeometry
          attach="geometry"
          args={[2, 50, 25]}
          translate={(0, 100, 0)}
        />
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
