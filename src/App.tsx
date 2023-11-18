import { useContext } from "react";
import Container from "./layout/Container";
import TodoContainer from "./components/TodoContainer";
import AddBtn from "./components/AddBtn";
import Todos from "./components/Todos";
import ThemeToggler from "./components/ThemeToggler";
import AddTodoDialog from "./components/AddTodoDialog";
import { AppContext } from "./context/Provider";

function App() {
  const context = useContext(AppContext);

  const todos: [] = JSON.parse(context?.todoContent);
  return (
    <>
      <Container>
        <div className="-mt-[8.5rem] flex flex-col mx-5 md:mx-auto md:max-w-[500px]">
          <ThemeToggler />
          <div className="flex flex-col gap-5 mt-[1rem]">
            <AddBtn>Create New Todo . . .</AddBtn>
            <TodoContainer>
              {todos?.map((values, index) => (
                <Todos key={index} content={values} />
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
