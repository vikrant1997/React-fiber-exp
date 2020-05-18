import React from "react";
import Lights from "../components/Lights";
import { useThree, useLoader } from "react-three-fiber";
import SkyBox from "../components2/SkyBox";
import { CubeTextureLoader, TextureLoader } from "three";
import ClothTextureURL from "../assets/cloth.jpg";
// import { CubeTextureLoader } from "three";

function Scene2() {
  //   const { scene } = useThree();

  // const texture = useLoader(CubeTextureLoader, [
  //   "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg",
  //   "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg",
  //   "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg",
  //   "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg",
  //   "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg",
  //   "https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg",
  // ]);
  // const texture2 = useLoader(TextureLoader, ClothTextureURL);
  // const clothTexture = useLoader(TextureLoader, ClothTextureURL);
  return (
    <React.Suspense fallback={<mesh />}>
      <SkyBox />
    </React.Suspense>
  );
}

export default Scene2;
