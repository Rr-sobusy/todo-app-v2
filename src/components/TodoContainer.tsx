import React, { useContext } from "react";
import SimpleBar from "simplebar-react";

//* react context
import { ThemeContext } from "../context/Provider";

// Scrollbar minified
import "simplebar-react/dist/simplebar.min.css";

type Props = {
  children?: React.ReactNode;
};

const TodoContainer: React.FC<Props> = ({ children }) => {
  const theme = useContext(ThemeContext);

  return (
    <section
      className={`min-h-[500px]  ${
        theme?.theme === "dark"
          ? "bg-[#25273C] text-slate-400"
          : "bg-[#FFFFFF] text-slate-700"
      } md:min-h-[350px] text-[13px] font-semibold tracking-wider rounded-md`}
    >
      <SimpleBar className="max-h-[500px] md:max-h-[350px]">
        {children}
      </SimpleBar>
    </section>
  );
};

export default TodoContainer;
