import React from 'react';
import styles from "./App.module.scss";

import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <React.Fragment>
    <p>App works</p>
    <div className={styles.flex}>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
      <Button/>
    </div>

    <SearchBar/>
    </React.Fragment>
  );
}

export default App;

