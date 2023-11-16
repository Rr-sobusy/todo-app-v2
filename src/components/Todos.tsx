import React, { useContext } from "react";
import { ThemeContext } from "../context/Provider";
import CloseIcon from "../assets/icons8-close-64.png";
import EditIcon from "../assets/icons8-edit-64.png";
import useSessionStorage from "../hooks/use-localStorage";

type Props = {
  todoTitle: string;
};

const Todos: React.FC<Props> = ({todoTitle}) => {

  const context = useContext(ThemeContext);


  return (
    <div
      className={`px-3 py-3 flex gap-4 justify-between items-center border-b ${
        context?.theme === "dark" ? "border-slate-700" : "border-slate-200"
      }`}
    >
      <div className="flex truncate gap-2">
        <div className="w-5 h-5 border rounded-full border-slate-500"></div>
        <p>{todoTitle?.toString()}</p>
      </div>
      <div className="flex gap-2">
        <img className="w-4 h-4 cursor-pointer" src={EditIcon} alt="" />
        <img
          className="w-4 h-4 cursor-pointer"
          src={CloseIcon}
          alt=""
        />
      </div>
    </div>
  );
};

export default Todos;
