import React, { useRef, useEffect } from "react";
import { useLoader, useThree, extend } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";
import { SimplifyModifier } from "three/examples/jsm/modifiers/SimplifyModifier";
import { Sphere, Plane } from "drei";
import { Object3D } from "three";
import * as THREE from "three";

// import url from "../assets/pony_cartoon/scene.gltf";

export default function Car(props) {
  const group = useRef();

  const secondGroup = useRef();

  const { nodes, materials, animations } = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/pony_cartoon/scene.gltf`,
    draco("/draco-gltf/")
  );

  useEffect(() => {
    var modifier = new SimplifyModifier();
    var simplified = nodes.mesh_0.clone();
    simplified.material = materials.Body_SG1;
    simplified.geometry = nodes.mesh_0.geometry;

    // simplified.material.flatShading = true;
    console.log(simplified.geometry);

    // var count = Math.floor(simplified.geometry.attributes.position.count * 0.1); // number of vertices to remove
    // console.log(count);
    // console.log(modifier.modify(simplified.geometry, 10));

    simplified.geometry = modifier.modify(simplified.geometry, 1700);
    simplified.geometry.computeFaceNormals();
    simplified.geometry.computeBoundingBox();
    simplified.geometry.computeBoundingSphere();
    // simplified.geometry.computeFlatVertexNormals();
    // simplified.geometry.computeMorphNormals();
    simplified.geometry.computeVertexNormals();
    // simplified.geometry.computeFlatVertexNormals();
    // simplified.geometry = nodes.mesh_0.geometry;
    // simplified.material = materials.Body_SG1;
    console.log(simplified.geometry);

    // simplified.geometry = modifier.modify(simplified.geometry, 0);

    secondGroup.current.add(simplified);
  }, []);

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
      <group
        position={[0, 0, -50]}
        ref={secondGroup}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.1, 0.1, 0.1]}
      />
    </group>
  );
}
