import { useState, useContext } from "react";
import Container from "./layout/Container";
import Typography from "./components/Typography";
import TodoContainer from "./components/TodoContainer";
import AddBtn from "./components/AddBtn";
import Todos from "./components/Todos";

// context
import { ThemeContext } from "./context/Provider";

// svg icons
import Sun from "./assets/icon-sun.svg";
import Moon from "./assets/icon-moon.svg";

function App() {
  const theme = useContext(ThemeContext);

  const Icon = theme?.theme === "dark" ? Sun : Moon;

  function changeTheme() {
    theme?.toggleTheme();
  }
  return (
    <Container>
      <div className="-mt-[8.5rem] flex flex-col mx-5 md:mx-auto md:max-w-[500px]">
        <div className="flex items-center justify-between">
          <Typography className="tracking-wider text-white">TODO</Typography>
          <img
            onClick={changeTheme}
            className="cursor-pointer"
            src={Icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-5 mt-[1rem]">
          <AddBtn
            className={`px-3 py-3 text-[13px] font-semibold cursor-pointer tracking-wider font-sans ${
              theme?.theme === "dark"
                ? "bg-[#25273C] text-slate-400"
                : "bg-[#FFFFFF] text-slate-700"
            } rounded-md`}
          >
            Create New Todo . . .
          </AddBtn>
          <TodoContainer
            className={`min-h-[500px]  ${
              theme?.theme === "dark"
                ? "bg-[#25273C] text-slate-400"
                : "bg-[#FFFFFF] text-slate-700"
            } md:min-h-[350px] text-[13px] font-semibold tracking-wider rounded-md`}
          >
            <Todos />
            <Todos />
          </TodoContainer>
        </div>
      </div>
    </Container>
  );
}

export default App;
