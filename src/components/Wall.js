import React from "react";

function Wall({ length, breadth, height, texture, receiveShadow, castShadow }) {
  return (
    <mesh receiveShadow={receiveShadow} castShadow={castShadow}>
      <boxGeometry attach="geometry" args={[length, breadth, height]} />
      <meshLambertMaterial
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
