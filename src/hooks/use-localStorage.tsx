import { useState } from "react";
import { TodoTypes } from "../interfaces/Todos.types";

type Props = {
  key: string;
};

const initialValues = JSON.stringify([
  {
    id: 1,
    title: "Wake up in the morning",
    isCompleted: false,
  },
]);

const useLocalStorage = ({ key }: Props) => {
  const stateValue = localStorage.getItem(key || initialValues);

  // reactive state
  const [value, setValue] = useState<string | null>(stateValue);

  function updateState(input: string) {
    setValue(input);
    localStorage.setItem(key, input);
  }

  return { value, updateState };
};

export default useLocalStorage;
