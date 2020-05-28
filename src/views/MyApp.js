import React from "react";
import { Canvas } from "react-three-fiber";
import { observer } from "mobx-react";
import { values } from "mobx";

import Controls from "../components/Controls";
import controlStore from "../zustand/controlStore";
import Scene from "../views/Scene";
import { StoreContext } from "../index";

const MyApp = () => {
  // const todos =
  return (
    <StoreContext.Consumer>
      {(props) => {
        console.log(props);
        return (
          <Canvas
            shadowMap={{ enabled: "true" }}
            onClick={() => setPointerLock()}
          >
            <React.Suspense fallback={<mesh />}>
              <Scene />
              <Controls />
            </React.Suspense>
          </Canvas>
        );
      }}
    </StoreContext.Consumer>
  );
};
export default MyApp;
