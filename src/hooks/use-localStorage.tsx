import { useState } from "react";

type Props = {
  key: string;
};

const useLocalStorage = ({ key }: Props) => {
  const stateValue: string | null = localStorage.getItem(key);

  // reactive state
  const [value, setValue] = useState<string | null>(stateValue);

  function updateState(input: any) {
    setValue(input);
    localStorage.setItem(key, input);
  }

  return{value, updateState};
};

export default useLocalStorage;
