import React from "react";
import { useLoader } from "react-three-fiber";

import { TextureLoader, RepeatWrapping } from "three";

import WoodTextureURL from "../../assets/hardwood_floor.jpg";
import BrickTexture from "../../assets/brick_texture.jpg";

import RoofTextureUrl from "../../assets/roof_texture.jpg";
import Wall from "../Wall";
import { HTML } from "drei";
import "./styles.css";
function Room({ position }) {
  // loading texture for the play area

  const roofTexture = useLoader(TextureLoader, RoofTextureUrl);

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
      <group position={position}>
        <HTML
          position={[0, distantceOrigin / 4, 0]}
          prepend // Project content behind the canvas (default: false)
          // center // Adds a -50%/-50% css transform (default: false)
          fullscreen // Aligns to the upper-left corner, fills the screen (default:false)
          scaleFactor={100} // Scales children if set to a number (default=undefined)
          zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
          // portal={domnodeRef} // Reference to target container (default=undefined)
          // {...groupProps} // All THREE.Group props are valid
          // {...divProps} // All HTMLDivElement props are valid
        >
          <div
            style={{
              // backgroundColor: "orange",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flow: "row",
            }}
          >
            <div class="content">Room</div>
          </div>
        </HTML>
        {/* mesh for the playing area */}
        <Wall
          position={[0, distantceOrigin / 4, 0]}
          length={wallHeight}
          breadth={0}
          height={wallHeight}
          texture={roofTexture}
          castShadow={false}
          receiveShadow={true}
        />

        {/* bottom wall */}

        <Wall
          position={[0, 0, 0]}
          length={wallHeight}
          breadth={0}
          height={wallHeight}
          texture={floorTexture}
          castShadow={false}
          receiveShadow={true}
        />

        {/* left wall */}
        {/* <object3D position={[-distantceOrigin / 2, distantceOrigin / 8, 0]}>
        <Wall
          length={0}
          breadth={wallHeight / 4}
          height={wallHeight}
          texture={wallTexture}
        />
      </object3D> */}
        {/* right wall */}

        <Wall
          position={[distantceOrigin / 2, distantceOrigin / 8, 0]}
          length={0}
          breadth={wallHeight / 4}
          height={wallHeight}
          texture={wallTexture}
          castShadow={true}
          receiveShadow={false}
        />

        {/* top wall */}

        {/* back wall */}

        <Wall
          position={[0, distantceOrigin / 8, distantceOrigin / 2]}
          length={wallHeight}
          breadth={wallHeight / 4}
          height={0}
          texture={wallTexture}
          castShadow={true}
          receiveShadow={false}
        />

        {/* front wall */}

        <Wall
          position={[0, distantceOrigin / 8, -distantceOrigin / 2]}
          length={wallHeight}
          breadth={wallHeight / 4}
          height={0}
          texture={wallTexture}
          castShadow={true}
          receiveShadow={false}
        />
      </group>
    </>
  );
}

export default Room;
