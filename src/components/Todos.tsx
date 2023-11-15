import React, { useContext } from "react";
import { ThemeContext } from "../context/Provider";

type Props = {};

const Todos: React.FC<Props> = () => {
  const context = useContext(ThemeContext);

  return (
    <div
      className={`px-3 py-3 flex gap-4 justify-between border-b ${
        context?.theme === "dark" ? "border-slate-700" : "border-slate-200"
      }`}
    >
      <div className="flex truncate">
        <div className="w-5 h-5 border rounded-full border-slate-500"></div>
      </div>
      <p className="text-base">X</p>
    </div>
  );
};

export default Todos;
