/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { draco } from "drei";
import { Mesh, Group } from "three";

type GLTFResult = GLTF & {
  nodes: {
    Object_0: THREE.Mesh;
  };
  materials: {
    Material_0_COLOR_0: THREE.MeshStandardMaterial;
  };
};

type ActionName = "KeyAction";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

function Bird2(props: JSX.IntrinsicElements["group"]) {
  const mesh = useRef<Mesh>();
  const group = useRef<Group>();
  const { nodes, materials, animations } = useLoader<GLTFResult>(
    GLTFLoader,
    `${process.env.PUBLIC_URL}/flamingo.glb`,
    draco("/draco-gltf/")
  );

  const actions = useRef<GLTFActions>();
  const [mixer] = useState(() => new THREE.AnimationMixer(null as any));

  useFrame((state, delta) => mixer.update(delta));

  useEffect(() => {
    mesh.current!.scale.set(10, 10, 10);
    actions.current = {
      KeyAction: mixer.clipAction(animations[0], group.current),
    };
    return () => animations.forEach((clip) => mixer.uncacheClip(clip));
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        ref={mesh}
        material={materials.Material_0_COLOR_0}
        geometry={nodes.Object_0.geometry}
        morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
        morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
export default Bird2;
