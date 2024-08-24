"use client";

import Counter from "@/Components/Counter/page";
import CustomeHook from "@/Components/CustomeHook/page";
import { ChangeEvent, useState } from "react";

type InputValue = number | string;

function useInput(initialValue: InputValue) {
  const [value, setValue] = useState<InputValue>(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue =
      e.target.type === "number" ? Number(e.target.value) : e.target.value;
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChange: handleChange, reset };
}

function Home() {
  const firstName = useInput("");
  const lastName = useInput("");
  const age = useInput(0);

  return (
    <main>
      <Counter />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName.value}
          onChange={firstName.onChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName.value}
          onChange={lastName.onChange}
        />
        <input
          type="number"
          placeholder="Age"
          value={age.value}
          onChange={age.onChange}
        />
      </form>
      {/* <CustomeHook /> */}
    </main>
  );
}

export default Home;
