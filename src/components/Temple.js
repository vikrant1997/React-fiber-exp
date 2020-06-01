/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";

export default function Temple(props) {
  const group = useRef();
  const { nodes, materials, animations } = useLoader(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/Olympia/templematerial.gltf`,
    draco("/draco-gltf/")
  );
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 320, 0]} scale={[500, 500, 500]}>
        <mesh material={materials.Material} geometry={nodes.Cube.geometry} />
      </group>
    </group>
  );
}
