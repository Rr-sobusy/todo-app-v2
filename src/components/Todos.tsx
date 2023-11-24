import React, { useContext } from "react";
import { AppContext } from "../context/Provider";
import { ModalContext } from "../context/ModalContext";
import { TodoTypes } from "../interfaces/Todos.types";
import CloseIcon from "../assets/icons8-close-64.png";
import EditIcon from "../assets/icons8-edit-64.png";
import CheckIcon from "../assets/icon-check.svg";
import clsx from "clsx";

type TodosProps = {
  content: TodoTypes;
};

const Todos: React.FC<TodosProps> = ({ content }) => {
  const context = useContext(AppContext);
  const modalContext = useContext(ModalContext)

  const { title, isCompleted } = content

  function updateHandler(){
       context?.setActiveTodo(content)
       modalContext?.handleUpdateOpen()
  }

  function removeHandler(){
        context?.removeHandler(content);
  }

  return (
    <div
      className={`px-3 py-3 flex gap-4 justify-between items-center border-b ${context?.theme === "dark" ? "border-slate-700" : "border-slate-200"
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
        <p className={`${isCompleted && '__todo-completed-typography'}`}>{title?.toString()}</p>
      </div>
      <div className="flex gap-2">
        <img title="Edit" onClick={updateHandler} className="w-4 h-4 cursor-pointer" src={EditIcon} alt="" />
        <img title="Move" onClick={removeHandler}  className="w-4 h-4 cursor-pointer" src={CloseIcon} alt="" />
      </div>
    </div>
  );
};

export default Todos;
