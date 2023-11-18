import { useState } from "react";

type Props = {
  key: string;
};


const useLocalStorage = ({ key }: Props) => {
  const stateValue = localStorage.getItem(key);

  // reactive state
  const [value, setValue] = useState<string | null>(stateValue);

  function updateState(input: string) {
    setValue(input);
    localStorage.setItem(key, input);
  }

  return { todoContent: value, updateState };
};

export default useLocalStorage;
