import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";

// import url from "../assets/pony_cartoon/scene.gltf";

export default function Car(props) {
  const group = useRef();

  const { nodes, materials, animations } = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/pony_cartoon/scene.gltf`,
    draco("/draco-gltf/")
  );
  // useEffect(() => {
  //   console.log(gltf.scene);

  //   scene.add(gltf.scene);
  // });
  // return <></>;
  // const gltf = useLoader(
  //   GLTFLoader,
  //   `${process.env.PUBLIC_URL}/pony_cartoon/scene.gltf`,
  //   draco("/draco-gltf/")
  // );
  // console.log(gltf);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group scale={[0.1, 0.1, 0.1]}>
          <mesh
            material={materials.Body_SG1}
            geometry={nodes.mesh_0.geometry}
            castShadow={true}
          />
          <mesh
            material={materials.Ground_SG}
            geometry={nodes.mesh_1.geometry}
          />
          <mesh
            material={materials.Interior_SG}
            geometry={nodes.mesh_2.geometry}
          />
          <mesh
            material={materials.Windows_SG}
            geometry={nodes.mesh_3.geometry}
          />
        </group>
      </group>
    </group>
  );
}
