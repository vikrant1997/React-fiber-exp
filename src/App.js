import React from "react";

import "./App.css";
import MyApp from "./views/MyApp";
import { inject, observer } from "mobx-react";
import "./index";
import { StoreContext } from "./index";

const App = ({ store }) => {
  return <MyApp />;
};

export default inject("store")(observer(App));
