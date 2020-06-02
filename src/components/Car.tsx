import React, { useRef, useEffect } from "react";
import { useLoader, useThree, extend } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";
import { SimplifyModifier } from "three/examples/jsm/modifiers/SimplifyModifier";
import { Sphere, Plane } from "drei";
import { Object3D, Mesh, Group } from "three";
import * as THREE from "three";

// import url from "../assets/pony_cartoon/scene.gltf";
type GLTFResult = GLTF & {
  nodes: {
    mesh_0: THREE.Mesh;
    mesh_1: THREE.Mesh;
    mesh_2: THREE.Mesh;
    mesh_3: THREE.Mesh;
  };
  materials: {
    Material_0_COLOR_0: THREE.MeshStandardMaterial;
    Body_SG1: THREE.MeshStandardMaterial;
    Ground_SG: THREE.MeshStandardMaterial;
    Interior_SG: THREE.MeshStandardMaterial;
    Windows_SG: THREE.MeshStandardMaterial;
  };
};

function Car(props: JSX.IntrinsicElements["group"]) {
  const group = useRef<Group>();
  const mesh_0 = useRef<Mesh>();

  const { nodes, materials, animations } = useLoader<GLTFResult>(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/pony_cartoon/scene.gltf`,
    draco("/draco-gltf/")
  );

  useEffect(() => {
    // var modifier = new SimplifyModifier();
    // mesh_0.current!.geometry = modifier.modify(mesh_0.current!.geometry, 1);
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <group scale={[0.1, 0.1, 0.1]}>
          <mesh
            ref={mesh_0}
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
export default Car;
