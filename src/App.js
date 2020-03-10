import React, { useState } from "react";
import styles from "./App.module.scss";
import Routes from "./containers/Routes";
import NavBar from "./containers/NavBar";

import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCheckSquare, faCoffee);

const App = () => {
  return (
    <>
      <div>
        <h1>Fun facts about toitles</h1>
        <NavBar />
      </div>
      <Routes />
    </>
  );
};
export default App;
