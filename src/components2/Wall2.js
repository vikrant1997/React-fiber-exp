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
  CubeTextureLoader,
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

  return <></>;
}

export default Wall;
