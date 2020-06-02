import React from "react";
import { Vector3, Texture } from "three";
type WallProps = {
  position: [number, number, number];
  length: number;
  breadth: number;
  height: number;
  texture: Texture;
  receiveShadow: boolean;
  castShadow: boolean;
};

const Wall: React.FC<WallProps> = ({
  position,
  length,
  breadth,
  height,
  texture,
  receiveShadow,
  castShadow,
}) => {
  return (
    <mesh
      position={position}
      receiveShadow={receiveShadow}
      castShadow={castShadow}
    >
      <boxGeometry attach="geometry" args={[length, breadth, height]} />
      <meshLambertMaterial
        attach="material"
        // opacity={0}

        map={texture}
      />
    </mesh>
  );
};
export default Wall;
