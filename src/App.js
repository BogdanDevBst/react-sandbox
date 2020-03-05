import React from "react";
import styles from "./App.module.scss";

import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar";
import Counter from "./components/Counter";

import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCheckSquare, faCoffee);

const App = () => {
  return (
    <>
      <p>App works</p>
      <div className={styles.flex}></div>
      <Counter />
    </>
  );
};

export default App;
