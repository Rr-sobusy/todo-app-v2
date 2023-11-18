import React, { createContext, useState } from "react";
import { createNewTodo } from "../libs/utils/helpers/createNewTodo";
import useLocalStorage from "../hooks/use-localStorage";

type Props = {
  children: React.ReactNode;
};

type ProviderProps = {
  isAddOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  submitHandler: (input: string) => void;
  value: any;
};

export const ModalContext = createContext<ProviderProps | undefined>(undefined);

export const ModalContextProvider = ({ children }: Props) => {
  //* hook containing the todos states and setter function
  const { value, updateState } = useLocalStorage({ key: "randy" });

  function submitHandler(input: string) {
    /**
     * TOdo - check if there is existing records in storage. If not , create new instance of array and
     *  push the current states
     */
    if (value?.length === undefined) {
      let arr = [];
      arr.push(createNewTodo(input));
      updateState(JSON.stringify(arr));
    } else {
      const fixed: [] = JSON.parse(value);
      updateState(JSON.stringify([...fixed, createNewTodo(input)]));
    }
  }

  //* Add todo states
  const [isAddOpen, setAddOpen] = useState<boolean>(false);

  function handleClose() {
    setAddOpen(false);
  }

  function handleOpen() {
    setAddOpen(true);
  }
  return (
    <ModalContext.Provider
      value={{ isAddOpen, handleClose, handleOpen, submitHandler, value }}
    >
      {children}
    </ModalContext.Provider>
  );
};
