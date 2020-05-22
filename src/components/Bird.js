import React, { useRef, useState, useEffect } from "react";
import { useLoader, useFrame } from "react-three-fiber";
import * as Three from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Bird({ speed, factor, url, ...props }) {
  const gltf = useLoader(GLTFLoader, url);

  const group = useRef();
  const scene = useRef();
  const [mixer] = useState(() => new Three.AnimationMixer());

  useEffect(() => {
    scene.current.scale.set(5, 5, 5);
    void mixer.clipAction(gltf.animations[0], group.current).play();
  }, []);

  useFrame((state, delta) => {
    group.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  });

  return (
    <group ref={group}>
      <scene name="Scene" {...props} ref={scene}>
        <mesh
          castShadow={true}
          name="Object_0"
          morphTargetDictionary={gltf.__$[1].morphTargetDictionary}
          morphTargetInfluences={gltf.__$[1].morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}
        >
          <bufferGeometry attach="geometry" {...gltf.__$[1].geometry} />
          <meshStandardMaterial
            attach="material"
            {...gltf.__$[1].material}
            name="Material_0_COLOR_0"
          />
        </mesh>
      </scene>
    </group>
  );
}
export default Bird;
