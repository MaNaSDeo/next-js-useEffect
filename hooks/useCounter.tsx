"use client";

import { useState } from "react";

export function useCounter(initialCount: number = 0) {
  const [count, setCount] = useState<number>(0);

  const handleCount = (amount: number) => {
    setCount((prev) => {
      return prev + amount;
    });
  };

  const resetCount = () => {
    setCount(initialCount);
  };

  return { count, handleCount, resetCount };
}
