import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

type ProviderProps = {
  isAddOpen: boolean;
  handleClose: () => void;
  handleOpen: () => void;
  isUpdateOpen : boolean;
  handleUpdateOpen: ()=>void;
  handleUpdateClose: ()=>void;
};

export const ModalContext = createContext<ProviderProps | undefined>(undefined);

export const ModalContextProvider = ({ children }: Props) => {



  //* Add todo states
  const [isAddOpen, setAddOpen] = useState<boolean>(false);
  const [isUpdateOpen,setUpdateOpen] = useState<boolean>(false)

  /**
   * * Add Todo dialog methods
   */
  function handleClose() {
    setAddOpen(false);
  }

  function handleOpen() {
    setAddOpen(true);
  }

  /**
   * * Update Todo dialog methods
   */
  function handleUpdateOpen(){
    setUpdateOpen(true)
  }

  function handleUpdateClose(){
    setUpdateOpen(false)
  }
  return (
    <ModalContext.Provider
      value={{ isAddOpen, handleClose, handleOpen, isUpdateOpen, handleUpdateOpen, handleUpdateClose}}
    >
      {children}
    </ModalContext.Provider>
  );
};
