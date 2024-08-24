"use client";

import { useEffect } from "react";
import styles from "./Counter.module.scss";
import { useCounter } from "@/hooks/useCounter";

function Counter() {
  const { count, handleCount, resetCount } = useCounter(0);

  useEffect(() => {
    console.log(
      `I'm inside the useEffect hook. The current count is: ${count}`
    );

    return () => {
      console.log(
        `Cleaning up anything that was setup above. Last count was: ${count}`
      );
    };
  }, [count]);

  return (
    <section className={styles.landing}>
      <p className={styles.count}>{count}</p>
      <div className={styles.btnContainer}>
        <button onClick={() => handleCount(1)}>Increase</button>
        <button onClick={() => resetCount()}>Reset</button>
        <button onClick={() => handleCount(-1)}>Decrease</button>
      </div>
    </section>
  );
}

export default Counter;
