import React from "react";
import Lights from "../components/Lights";
import { useThree, useLoader } from "react-three-fiber";
import Wall from "../components/Wall";
import { CubeTextureLoader, Scene } from "three";

function SkyBox() {
  //   const { scene } = useThree();

  const texture = useLoader(CubeTextureLoader, [
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg",
    "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg",
  ]);

  return (
    <object3D position={[0, 0, 0]}>
      {/* mesh for the playing area */}
      <mesh receiveShadow>
        <boxGeometry attach="geometry" args={[50, 1, 50]} />
        <meshStandardMaterial
          attach="material"
          color={0x42a8ff}
          roughness={0.4}
          metalness={0}
          bumpScale={1}
          map={texture}
        />
      </mesh>
    </object3D>
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
export default SkyBox;
