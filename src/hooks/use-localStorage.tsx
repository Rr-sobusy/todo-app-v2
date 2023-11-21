import { useState } from "react";
import { TodoTypes } from "../interfaces/Todos.types";

type Props = {
  key: string;
};

const useLocalStorage = ({ key }: Props) => {
  const stateValue = localStorage.getItem(key || "{}");

  // reactive state
  const [value, setValue] = useState<string | "">(stateValue || "");

  function updateState(input: string) {
    setValue(input);
    localStorage.setItem(key, input);
  }

  return { todoContent: value, updateState }
};

export default useLocalStorage;
