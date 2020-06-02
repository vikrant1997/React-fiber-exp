import React from "react";
import { useLoader } from "react-three-fiber";
import Wall from "./Wall";
import { TextureLoader, RepeatWrapping } from "three";
import GrassTextureUrl from "../assets/cloth.jpg";

function Grass() {
  const grassTexture = useLoader(TextureLoader, GrassTextureUrl);

  grassTexture.wrapS = RepeatWrapping;
  grassTexture.wrapT = RepeatWrapping;
  grassTexture.offset.set(0, 0);
  grassTexture.repeat.set(10, 10);
  return (
    <Wall
      position={[0, -0.1, 0]}
      length={1000}
      breadth={0}
      height={1000}
      texture={grassTexture}
      castShadow={false}
      receiveShadow={true}
    />
  );
}

export default Grass;
