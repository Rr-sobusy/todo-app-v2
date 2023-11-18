import React, { useContext } from "react";
import { AppContext } from "../context/Provider";
import { TodoTypes } from "../interfaces/Todos.types";
import CloseIcon from "../assets/icons8-close-64.png";
import EditIcon from "../assets/icons8-edit-64.png";
import CheckIcon from "../assets/icon-check.svg";
import clsx from "clsx";

type TodosProps = {
  content: TodoTypes;
};

const Todos: React.FC<TodosProps> = ({ content:{title,isCompleted} }) => {
  const context = useContext(AppContext);

  return (
    <div
      className={`px-3 py-3 flex gap-4 justify-between items-center border-b ${
        context?.theme === "dark" ? "border-slate-700" : "border-slate-200"
      }`}
    >
      <div className="flex items-center gap-2 truncate">
        <div
          className={`flex items-center justify-center w-6 h-6 border rounded-full ${clsx(
            { "__gradient-bg": isCompleted }
          )} border-slate-500`}
        >
          {isCompleted && <img src={CheckIcon} alt="" />}
        </div>
        <p>{title?.toString()}</p>
      </div>
      <div className="flex gap-2">
        <img className="w-4 h-4 cursor-pointer" src={EditIcon} alt="" />
        <img className="w-4 h-4 cursor-pointer" src={CloseIcon} alt="" />
      </div>
    </div>
  );
};

export default Todos;
