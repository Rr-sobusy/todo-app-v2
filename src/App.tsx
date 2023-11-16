import { useState, useContext } from "react";
import Container from "./layout/Container";
import Typography from "./components/Typography";
import TodoContainer from "./components/TodoContainer";
import AddBtn from "./components/AddBtn";
import Todos from "./components/Todos";
import ThemeToggler from "./components/ThemeToggler";


function App() {

  return (
    <Container>
      <div className="-mt-[8.5rem] flex flex-col mx-5 md:mx-auto md:max-w-[500px]">
      <ThemeToggler />
        <div className="flex flex-col gap-5 mt-[1rem]">
          <AddBtn>Create New Todo . . .</AddBtn>
          <TodoContainer>
            <Todos />
            <Todos />
          </TodoContainer>
        </div>
      </div>
    </Container>
  );
}

export default App;
