import React, { useContext } from "react";

//* react context
import { ThemeContext } from "../context/Provider";

type Props = {
  children: string;
  clickHandler: React.MouseEventHandler<HTMLDivElement>
};

const AddBtn: React.FC<Props> = ({ children , clickHandler}) => {
  const theme = useContext(ThemeContext);

  return (
    <div
      onClick={clickHandler}
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
