import React, { useContext } from "react";
import { ThemeContext } from "../context/Provider";
import BgImage from "../assets/bg-image.jpg";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  const context = useContext(ThemeContext);
  return (
    <main className="flex flex-col w-screen h-screen">
      <h1 className="absolute">rex</h1>
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
