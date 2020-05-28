import ReactDOM from "react-dom";
import React from "react";
import App from "App";
import "./index.css";
import { Provider, inject, observer } from "mobx-react";

import ControlStore from "./mst/controlStore";
import { getSnapshot } from "mobx-state-tree";

const store = ControlStore.create();

export const StoreContext = React.createContext();

ReactDOM.render(
  <StoreContext.Provider value={store}>
    <App store={store} />
  </StoreContext.Provider>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <Provider store={controls}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
