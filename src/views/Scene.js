import React from "react";
import Lights from "../components/Lights";
import { useThree } from "react-three-fiber";
import PoolTable from "../components/PoolTable";
import Wall from "../components/Wall";
function Scene() {
  const { camera } = useThree();

  camera.fov = 45;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.near = 0.1;
  camera.far = 1;

  camera.up.set(0, 0, 1);
  camera.position.set(-25, 0, 0);

  return (
    // <mesh>

    //   <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
    //   <meshNormalMaterial attach="material" />
    // </mesh>

    <>
      <Lights
        type="AmbientLight"
        color={0xffffff}
        intensity={1}
        position={[0, 0, 0]}
      />
      {[[-5, -12, 20], [5, -12, 20], [-5, 12, 20], [(5, 12, 20)]].map((pos) => (
        <Lights
          type="PointLight"
          color={0xffffff}
          intensity={1}
          distance={100}
          position={pos}
          castShadow
        />
      ))}
      <React.Suspense fallback={<mesh />}>
        <mesh>
          <boxBufferGeometry attach="geometry" args={[2, 2, 2]} />
          <meshNormalMaterial attach="material" />
        </mesh>
        {/* <PoolTable /> */}
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
