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
import ClothTextureURL2 from "../assets/hardwood2_bump.jpg";
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

  const clothTexture2 = useLoader(TextureLoader, ClothTextureURL2);
  clothTexture.wrapS = RepeatWrapping;
  clothTexture.wrapT = RepeatWrapping;
  clothTexture.offset.set(0, 0);
  clothTexture.repeat.set(3, 6);
  var wallHeight = window.innerHeight / 2;

  var distantceOrigin = 200;

  clothMaterial.map = clothTexture;

  return (
    <>
      {/* bottom wall */}
      <object3D position={[0, -distantceOrigin, 0]}>
        {/* mesh for the playing area */}
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[wallHeight, 1, wallHeight]} />
          <meshStandardMaterial
            attach="material"
            color={0x42a8ff}
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={clothTexture2}
          />
        </mesh>
      </object3D>
      {/* left wall */}
      <object3D position={[-distantceOrigin, -2, 0]}>
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[0, wallHeight, wallHeight]} />
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
      {/* right wall */}
      <object3D position={[distantceOrigin, -2, 0]}>
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[1, wallHeight, wallHeight]} />
          <meshStandardMaterial
            attach="material"
            color={0x42a8ff}
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={clothTexture}
          />
        </mesh>
        {/* top wall */}
      </object3D>
      {/* <object3D position={[wallHeight / 2, wallHeight / 2, 0]}>
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[1, wallHeight, wallHeight]} />
          <meshStandardMaterial
            attach="material"
            color={0x42a8ff}
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={clothTexture}
          />
        </mesh>
      </object3D> */}
      {/* back wall */}

      <object3D position={[0, -2, distantceOrigin]}>
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[wallHeight, wallHeight, 1]} />
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
      {/* front wall */}
      <object3D position={[0, -2, -distantceOrigin]}>
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[wallHeight, wallHeight, 1]} />
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
    </>
  );
}

export default Wall;
