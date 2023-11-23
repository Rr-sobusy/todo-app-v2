import { useContext } from "react";
import Container from "./layout/Container";
import TodoContainer from "./components/TodoContainer";
import AddBtn from "./components/AddBtn";
import Todos from "./components/Todos";
import ThemeToggler from "./components/ThemeToggler";
import { TodoTypes } from "./interfaces/Todos.types";
import AddTodoDialog from "./components/AddTodoDialog";
import UpdateTodoDialog from "./components/UpdateTodoDialog";
import RemoveTodoDialog from "./components/RemoveTodoDialog";
import { AppContext } from "./context/Provider";
import Filters from "./components/Filters";

function App() {
  const context = useContext(AppContext);

  const rawTodoContent = context?.todoContent;
  let finalTodo: TodoTypes[] = [];

  if (typeof rawTodoContent === "string") {
    const todos: TodoTypes[] = JSON.parse(rawTodoContent);
    finalTodo = todos;
  } else {
    // Handle the case when 'context?.todoContent' is undefined, null, or not a string
  }
  const list = finalTodo.filter(({ isCompleted }) => {
    if (context?.selectedFilter == "All") {
      return isCompleted === false || true;
    }
    if (context?.selectedFilter == "Active") {
      return isCompleted === false;
    }
    return isCompleted === true;
  });
  console.log(localStorage.getItem("randy"));
  return (
    <>
      <Container>
        <div className="-mt-[8.5rem] flex flex-col mx-5 md:mx-auto md:max-w-[500px]">
          <ThemeToggler />
          <div className="flex flex-col gap-5 mt-[1rem]">
            <AddBtn>Create New Todo . . .</AddBtn>
            <TodoContainer>
              {list.map((values, index) => (
                <Todos key={index} content={values} />
              ))}
            </TodoContainer>
            <Filters />
          </div>
        </div>
        <AddTodoDialog />
        <UpdateTodoDialog />
        <RemoveTodoDialog />
      </Container>
    </>
  );
}

export default App;
