import React, { useRef, useMemo, useState, useEffect } from "react";
import { useThree, useLoader, useFrame } from "react-three-fiber";
import * as Three from "three";
import { CubeTextureLoader, TextureLoader } from "three";
import paraonoma from "../assets/paranoma.jpg";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

import url from "../assets/flamingo.glb";

function Bird({ speed, factor, url, ...props }) {
  const gltf = useLoader(GLTFLoader, url);
  const group = useRef();
  const [mixer] = useState(() => new Three.AnimationMixer());
  useEffect(
    () => void mixer.clipAction(gltf.animations[0], group.current).play(),
    []
  );
  useFrame((state, delta) => {
    group.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  });
  return (
    <group ref={group}>
      <scene name="Scene" {...props}>
        <mesh
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

function SkyBox() {
  const texture = useMemo(() =>
    new CubeTextureLoader().load([
      "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg",
      "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg",
      "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg",
      "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg",
      "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg",
      "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg",
    ])
  );

  const { scene } = useThree();

  scene.background = texture;

  return <Bird position={[0, 0, 0]} speed={1} factor={1} url={url} />;
}

export default SkyBox;
