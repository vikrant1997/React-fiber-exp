import React, { useRef, useEffect } from "react";
import { useThree, useFrame, useLoader } from "react-three-fiber";
import Room from "../components/Room";
import { Color, AxesHelper, CameraHelper, SpriteMaterial } from "three";
import Bird2 from "../components/Bird2";
import Car from "../components/Car";
import cameraStore from "../zustand/cameraStore";

import Grass from "components/Grass";
import { Detailed, Sphere, Plane, Shadow, softShadows, HTML } from "drei";
import Temple from "../components/Temple";
import Terrain from "../components/Terrain";

softShadows();

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
    light.current.target.position.set(0, 50, 0);
    light.current.shadow.camera.bottom = -100;

    scene.add(light.current.target);
    // var axesHelper = new AxesHelper(1000);
    // scene.add(axesHelper);

    //comment this if helper not required
    scene.add(new CameraHelper(light.current.shadow.camera));
  }, []);
  //comment this if helper not required
  // // scene.add(new CameraHelper(camera));
  // const canvas = makeLabelCanvas(labelWidth, size, name);
  // const texture = new THREE.CanvasTexture(canvas);
  // // because our canvas is likely not a power of 2
  // // in both dimensions set the filtering appropriately.
  // texture.minFilter = THREE.LinearFilter;
  // texture.wrapS = THREE.ClampToEdgeWrapping;
  // texture.wrapT = THREE.ClampToEdgeWrapping;
  // const labelMaterial = new SpriteMaterial({
  //   map: texture,
  //   side: THREE.DoubleSide,
  //   transparent: true,
  // });
  return (
    <>
      {/* <ambientLight /> */}
      <directionalLight
        ref={light}
        intensity={2}
        position={[0, 50, 0]}
        visible={true}
        // castShadow={true}

        // target={Room}
      />
      <Terrain position={[0, 0, 0]} />
    </>
  );
  return (
    <>
      {/* <directionalLight
        ref={light}
        intensity={2}
        position={[-300, 200, 0]}
        visible={true}
        // castShadow={true}

        // target={Room}
      /> */}
      {/* <pointLight
        ref={light2}
        intensity={3}
        position={[-100, 100, -150]}
        visible={true}
        // castShadow={true}

        // target={Room}
      /> */}

      <ambientLight intensity={0.5} position={[0, 200, 0]} />

      {/* <mesh position={[0, 13, 0]} receiveShadow={true} castShadow={true}>
        <boxBufferGeometry attach="geometry" args={[2, 25, 25]} />
        <meshPhongMaterial attach="material" />
      </mesh> */}
      {/* 
      <Detailed distances={[0, 50, 150]} position={[0, 100, 0]}>
        <Plane args={[10, 10]} />
        <Sphere args={[20, 20, 20]}>
          <meshBasicMaterial attach="material" color="hotpink" />
        </Sphere>
        <Sphere args={[50, 50, 50]}>
          <meshBasicMaterial attach="material" color="yellow" />
        </Sphere>
      </Detailed> */}
      <group position={[-20, 40, 150]}>
        <mesh
          receiveShadow={true}
          castShadow={true}
          // scale={[1, 2, 1]}
        >
          <boxBufferGeometry
            attach="geometry"
            args={[2, 30, 25]}
            translate={(0, 100, 0)}
          />
          <meshPhongMaterial attach="material" />
        </mesh>

        <Shadow
          color="black"
          scale={[5, 40, 40]}
          // opacity={0.2}
          position={[0, -39, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>

      {/* bottom grass */}
      <Grass />

      <Room position={[0, 0, 0]} />

      <Room position={[200, 100, 200]} />
      <Room position={[200, 100, -200]} />

      <Bird2 position={[-150, 50, 0]} />
      <Car position={[-100, 0, -150]} />
      {/* <Temple /> */}
    </>
  );
}
// function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
//   const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
//   const halfFovY = THREE.MathUtils.degToRad(camera.fov * 0.5);
//   const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);

//   camera.position.copy(boxCenter);
//   camera.position.z += distance;

//   // pick some near and far values for the frustum that
//   // will contain the box.
//   camera.near = boxSize / 100;
//   camera.far = boxSize * 100;

//   camera.updateProjectionMatrix();
// }

// function makeSpriteTexture(textureSize, obj) {
//   const rt = new THREE.WebGLRenderTarget(textureSize, textureSize);

//   const aspect = 1; // because the render target is square
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

//   scene.add(obj);

//   // compute the box that contains obj
//   const box = new THREE.Box3().setFromObject(obj);

//   const boxSize = box.getSize(new THREE.Vector3());
//   const boxCenter = box.getCenter(new THREE.Vector3());

//   // set the camera to frame the box
//   const fudge = 1.1;
//   const size = Math.max(...boxSize.toArray()) * fudge;
//   frameArea(size, size, boxCenter, camera);

//   renderer.autoClear = false;
//   renderer.setRenderTarget(rt);
//   renderer.render(scene, camera);
//   renderer.setRenderTarget(null);
//   renderer.autoClear = true;

//   scene.remove(obj);

//   return {
//     position: boxCenter.multiplyScalar(fudge),
//     scale: size,
//     texture: rt.texture,
//   };
// }

export default Scene;