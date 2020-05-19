import React, { useRef } from "react";
import Lights from "../components/Lights";
import { useThree, useFrame } from "react-three-fiber";
import Wall from "../components/Wall";
import { Color } from "three";
import * as THREE from "three";

function Scene() {
  const { scene } = useThree();
  scene.background = new Color("lightblue");

  return (
    <>
      <Lights
        type="AmbientLight"
        color={0xffffff}
        intensity={1}
        position={[0, 200, 0]}
      />
      {[[-150, 20, 0], [100, 12, 0], [0, 12, -100], [(0, 12, 100)]].map(
        (pos) => (
          <Lights
            type="PointLight"
            color={0xffffff}
            intensity={1}
            distance={100}
            position={pos}
            castShadow
            key={pos}
          />
        )
      )}
      <Lights
        position={[0, 100, 0]}
        type="PointLight"
        color={0xffffff}
        intensity={1}
        distance={100}
        castShadow
      />
      <React.Suspense fallback={<mesh />}>
        <mesh position={[0, 2, 0]}>
          <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
          <meshNormalMaterial attach="material" />
        </mesh>

        <Wall />
      </React.Suspense>
    </>
    // </mesh>
  );
}

// function Scene() {
//   const { camera } = useThree();

//   camera.fov = 45;
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.near = 0.1;
//   camera.far = 1000;

//   camera.up.set(0, 0, 1);
//   camera.position.set(-5, 7, 5);

//   return (
//     <>
//       <Lights
//         type="AmbientLight"
//         color={0xffffff}
//         intensity={0.2}
//         position={[0, 0, 0]}
//       />
//       {[
//         [-5, -12, 20],
//         [5, -12, 20],
//         [-5, 12, 20],
//         [5, 12, 20],
//       ].map((pos) => (
//         <Lights
//           type="PointLight"
//           color={0xffffff}
//           intensity={0.4}
//           distance={100}
//           position={pos}
//           castShadow
//         />
//       ))}
//     </>
//   );
// }
export default Scene;
