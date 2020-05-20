import React from "react";

function Wall({ length, breadth, height, texture }) {
  return (
    <mesh receiveShadow>
      <boxGeometry attach="geometry" args={[length, breadth, height]} />
      <meshStandardMaterial
        attach="material"
        // opacity={0}
        roughness={0.4}
        metalness={0}
        bumpScale={1}
        map={texture}
      />
    </mesh>
  );
}
export default Wall;
