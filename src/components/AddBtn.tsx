import React, { useContext } from "react";

//* react context
import { ThemeContext } from "../context/Provider";
import { ModalContext } from "../context/ModalContext";

type Props = {
  children: string;
};

const AddBtn: React.FC<Props> = ({ children }) => {
  const theme = useContext(ThemeContext);

  const modal = useContext(ModalContext);

  //TODO - Event handler for opening modal dialog
  function openDialog() {
    modal?.handleOpen();
  }
  return (
    <div
      onClick={openDialog}
      className={`px-3 py-3 text-[13px] font-semibold cursor-pointer tracking-wider font-sans ${
        theme?.theme === "dark"
          ? "bg-[#25273C] text-slate-400"
          : "bg-[#FFFFFF] text-slate-700"
      } rounded-md`}
    >
      {children}
    </div>
  );
};

export default AddBtn;
