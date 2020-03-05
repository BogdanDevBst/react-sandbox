import React, { useState } from "react";
import styles from "./Counter.module.scss";

const Counter = () => {
  const [score, setScore] = useState(0); // react hooks

  const decrementJsx =
    score > 0 ? (
      <button onClick={() => setScore(score - 1)}>Decrement</button>
    ) : null;

  return (
    <>
      <button onClick={() => setScore(score + 1)}>Increment</button>
      {decrementJsx}
      <p>{score}</p>

      <button onClick={() => setScore(score - score)}>Reset</button>
    </>
  );
};

export default Counter;
