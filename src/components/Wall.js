import React from "react";
import { useLoader } from "react-three-fiber";

import {
  TextureLoader,
  RepeatWrapping,
  Shape,
  ExtrudeGeometry,
  BoxGeometry,
  MeshStandardMaterial,
  CylinderGeometry,
  MeshBasicMaterial,
} from "three";

import ClothTextureURL from "../assets/cloth.jpg";
import WoodTextureURL from "../assets/hardwood_floor.jpg";

const clothMaterial = new MeshStandardMaterial({
  color: 0x42a8ff,
  roughness: 0.4,
  metalness: 0,
  bumpScale: 1,
});

function Wall() {
  // loading texture for the play area
  const clothTexture = useLoader(TextureLoader, WoodTextureURL);
  clothTexture.wrapS = RepeatWrapping;
  clothTexture.wrapT = RepeatWrapping;
  clothTexture.offset.set(0, 0);
  clothTexture.repeat.set(3, 6);
  var wallHeight = window.innerHeight;
  var wallWidth = window.innerWidth;

  // applying texture to the play area material
  clothMaterial.map = clothTexture;

  return (
    <object3D position={[0, 0, -1.5]}>
      {/* mesh for the playing area */}
      <mesh receiveShadow>
        <boxGeometry attach="geometry" args={[wallHeight, wallWidth, 1]} />
        <meshStandardMaterial
          attach="material"
          color={0x42a8ff}
          roughness={0.4}
          metalness={0}
          bumpScale={1}
          map={clothTexture}
        />
      </mesh>
    </object3D>
  );
}

export default Wall;
