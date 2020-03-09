import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = props => {
  const { placeholderText, handleInput } = props;
  return (
    <input
      type="text"
      onInput={event => handleInput(event.target.value)}
      placeholder={placeholderText}
    />
  );
};

export default SearchBar;
