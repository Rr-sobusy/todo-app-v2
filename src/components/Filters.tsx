import  { useContext } from "react";
import { AppContext } from "../context/Provider";
import { TodoTypes } from "../interfaces/Todos.types";
import useLocalStorage from "../hooks/use-localStorage";

const Filters = () => {
  const context = useContext(AppContext);
  const { todoContent } = useLocalStorage({ key: "randy" });
  const arrayLength: TodoTypes[] = JSON.parse(todoContent);

  return (
    <div
      className={`${
        context?.theme === "dark"
          ? "bg-[#25273C] text-slate-400"
          : "bg-[#FFFF] text-slate-700"
      } py-3 px-3 rounded-md text-[13px] font-sans flex justify-center relative items-center gap-3`}
    >
      {["All", "Active", "Completed"].map((value) => (
        <p
          className={`${
            value === context?.selectedFilter && "text-blue-500"
          } cursor-pointer font-semibold tracking-wider`}
          onClick={() => context?.selectFilter(value)}
        >
          {value}
        </p>
      ))}

      <p className="absolute left-3">{`${arrayLength.length} item/s`}</p>
    </div>
  );
};

export default Filters;
