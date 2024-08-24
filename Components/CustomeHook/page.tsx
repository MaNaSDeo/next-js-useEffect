"use client";

import { useEffect, useState } from "react";
import styles from "./CustomeHook.module.scss";

function CustomeHook() {
  const [userText, setUserText] = useState<string>("");

  const handleUserKeyPress = (e: KeyboardEvent) => {
    /*
    const { key, keyCode } = e;

    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
      */
    const { key, code } = e;
    if (code === "Space" || (code.startsWith("Key") && key.length === 1))
      setUserText((prevText) => prevText + key);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });
  return (
    <section>
      <h1>Feel free to type on screen!</h1>
      <blockquote>{userText}</blockquote>
    </section>
  );
}

export default CustomeHook;
