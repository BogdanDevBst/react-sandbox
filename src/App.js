import React, { useState } from "react";
import styles from "./App.module.scss";

import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar";
import Counter from "./components/Counter";

import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCheckSquare, faCoffee);

const App = () => {
  const [currentNum, updateNum] = useState(100);

  return (
    <>
      <h1>{currentNum}</h1>
      <SearchBar placeholderText="Input number here" />
      <Button
        btnText="Increment"
        handleClick={() => updateNum(currentNum + 1)}
      />
      <Button
        btnText="Decrement"
        handleClick={() => updateNum(currentNum - 1)}
      />
      <Button btnText="/2" handleClick={() => updateNum(currentNum / 2)} />
      <Button btnText="x2" handleClick={() => updateNum(currentNum * 2)} />
    </>
  );
};

export default App;
