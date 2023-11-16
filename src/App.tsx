import { useState, useContext } from "react";
import Container from "./layout/Container";
import Typography from "./components/Typography";
import TodoContainer from "./components/TodoContainer";
import AddBtn from "./components/AddBtn";
import Todos from "./components/Todos";
import ThemeToggler from "./components/ThemeToggler";
import AddTodoDialog from "./components/AddTodoDialog";

const todos: string[] = ["rex", "popig", "hernandez"];

function App() {
  return (
    <>
      <Container>
        <div className="-mt-[8.5rem] flex flex-col mx-5 md:mx-auto md:max-w-[500px]">
          <ThemeToggler />
          <div className="flex flex-col gap-5 mt-[1rem]">
            <AddBtn>Create New Todo . . .</AddBtn>
            <TodoContainer>
              {todos.map((values) => (
                <Todos todoTitle={values} />
              ))}
            </TodoContainer>
          </div>
        </div>
        <AddTodoDialog />
      </Container>
    </>
  );
}

export default App;
