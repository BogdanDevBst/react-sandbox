import React from "react";
import styles from "./Button.module.scss";

const Button = () => {
  const testString = "Hello World!";

  return <button className={styles.button}>{testString}</button>;
};

export default Button;
