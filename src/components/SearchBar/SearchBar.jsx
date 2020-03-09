import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = props => {
  const { placeholderText } = props;
  return <input type="text" placeholder={placeholderText} />;
};

export default SearchBar;
