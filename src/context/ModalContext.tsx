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
};

export const ModalContext = createContext<ProviderProps | undefined>(undefined);

export const ModalContextProvider = ({ children }: Props) => {



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
      value={{ isAddOpen, handleClose, handleOpen}}
    >
      {children}
    </ModalContext.Provider>
  );
};
