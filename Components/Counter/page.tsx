"use client";

import { useState } from "react";
import styles from "./Counter.module.scss";

function Counter() {
  const [count, setCount] = useState<number>(0);

  const handleIncrease = () => {
    setCount((prev) => {
      return prev + 1;
    });
  };
  const handleDecrease = () => {
    setCount((prev) => {
      return prev - 1;
    });
  };

  return (
    <section className={styles.landing}>
      <p className={styles.count}>{count}</p>
      <div className={styles.btnContainer}>
        <button onClick={handleIncrease}>Increase</button>
        <button type="button" onClick={handleDecrease}>
          Decrease
        </button>
      </div>
    </section>
  );
}

export default Counter;
