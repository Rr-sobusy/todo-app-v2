import React, { useContext } from "react";
import { AppContext } from "../context/Provider";
import BgImage from "../assets/bg-image.jpg";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  const context = useContext(AppContext);
  return (
    <main className="flex flex-col w-screen h-screen">
      <img className="h-[30%] object-fill" alt="" src={BgImage} />
      <div
        className={` ${
          context?.theme === "dark"
            ? "bg-[var(--bg-dark)]"
            : "bg-[var(--bg-light)]"
        } h-full`}
      >
        {children}
      </div>
    </main>
  );
};

export default Container;
