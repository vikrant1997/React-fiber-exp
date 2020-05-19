import React from "react";
import { useLoader } from "react-three-fiber";

import { TextureLoader, RepeatWrapping } from "three";

import WoodTextureURL from "../assets/hardwood_floor.jpg";
import BrickTexture from "../assets/brick_texture.jpg";
import GrassTextureUrl from "../assets/cloth.jpg";
import RoofTextureUrl from "../assets/roof_texture.jpg";
function Wall() {
  // loading texture for the play area

  const grassTexture = useLoader(TextureLoader, GrassTextureUrl);
  grassTexture.wrapS = RepeatWrapping;
  grassTexture.wrapT = RepeatWrapping;
  grassTexture.offset.set(0, 0);
  grassTexture.repeat.set(7, 10);
  const roofTexture = useLoader(TextureLoader, RoofTextureUrl);
  grassTexture.wrapS = RepeatWrapping;
  grassTexture.wrapT = RepeatWrapping;
  grassTexture.offset.set(0, 0);
  grassTexture.repeat.set(10, 10);
  const floorTexture = useLoader(TextureLoader, WoodTextureURL);
  floorTexture.wrapS = RepeatWrapping;
  floorTexture.wrapT = RepeatWrapping;
  floorTexture.offset.set(0, 0);
  floorTexture.repeat.set(4, 6);

  const wallTexture = useLoader(TextureLoader, BrickTexture);
  wallTexture.wrapS = RepeatWrapping;
  wallTexture.wrapT = RepeatWrapping;
  wallTexture.offset.set(0, 0);
  wallTexture.repeat.set(3, 2);

  var wallHeight = 200;

  var distantceOrigin = 200;

  return (
    <>
      {/* top shee */}
      <object3D position={[0, distantceOrigin / 4, 0]} rotation={[0, 0, 0]}>
        {/* mesh for the playing area */}
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[wallHeight, 0, wallHeight]} />
          <meshStandardMaterial
            attach="material"
            // opacity={0}
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={roofTexture}
          />
        </mesh>
      </object3D>
      {/* bottom grass */}
      <object3D position={[0, -0.1, 0]} rotation={[0, 0, 0]}>
        {/* mesh for the playing area */}
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[1000, 0, 1000]} />
          <meshStandardMaterial
            attach="material"
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={grassTexture}
          />
        </mesh>
      </object3D>
      {/* bottom wall */}
      <object3D position={[0, 0, 0]}>
        {/* mesh for the playing area */}
        <mesh receiveShadow>
          <boxGeometry attach="geometry" args={[wallHeight, 0, wallHeight]} />
          <meshStandardMaterial
            attach="material"
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={floorTexture}
          />
        </mesh>
      </object3D>
      {/* left wall */}
      {/* <object3D position={[-distantceOrigin / 2, distantceOrigin / 8, 0]}>
        <mesh receiveShadow>
          <boxGeometry
            attach="geometry"
            args={[0, wallHeight / 4, wallHeight]}
          />
          <meshStandardMaterial
            attach="material"
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={wallTexture}
          />
        </mesh>
      </object3D> */}
      {/* right wall */}
      <object3D position={[distantceOrigin / 2, distantceOrigin / 8, 0]}>
        <mesh receiveShadow>
          <boxGeometry
            attach="geometry"
            args={[0, wallHeight / 4, wallHeight]}
          />
          <meshStandardMaterial
            attach="material"
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={wallTexture}
          />
        </mesh>
        {/* top wall */}
      </object3D>

      {/* back wall */}

      <object3D position={[0, distantceOrigin / 8, distantceOrigin / 2]}>
        <mesh receiveShadow>
          <boxGeometry
            attach="geometry"
            args={[wallHeight, wallHeight / 4, 0]}
          />
          <meshStandardMaterial
            attach="material"
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={wallTexture}
          />
        </mesh>
      </object3D>
      {/* front wall */}
      <object3D position={[0, distantceOrigin / 8, -distantceOrigin / 2]}>
        <mesh receiveShadow>
          <boxGeometry
            attach="geometry"
            args={[wallHeight, wallHeight / 4, 0]}
          />
          <meshStandardMaterial
            attach="material"
            roughness={0.4}
            metalness={0}
            bumpScale={1}
            map={wallTexture}
          />
        </mesh>
      </object3D>
    </>
  );
}

export default Wall;
