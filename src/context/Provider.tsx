/**
 * ! This component is the wrapper for the context of todos context 
 * ! from local storage and theme context from application state
 */

import { createContext, useState, ReactNode } from "react";
import { createNewTodo } from "../libs/utils/helpers/createNewTodo";
import { TodoTypes } from "../interfaces/Todos.types";

//* Local storage custom hook
import useLocalStorage from "../hooks/use-localStorage";

// default
const defaultTheme = "dark"

type Props = {
  children: ReactNode;
};

type ProviderProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  submitTodoHandler: (input: string) => void;
  todoContent: any;
  selectedTodo?: TodoTypes;
  setActiveTodo : (todo:TodoTypes)=>void;
  updateTodoHandler : (todo:TodoTypes)=>void;
};

export const AppContext = createContext<ProviderProps | undefined>(undefined);

export const ContextProvider = ({ children }: Props) => {

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedTodo, setSelectedTodo] = useState<TodoTypes | undefined>(undefined)

  const { todoContent, updateState } = useLocalStorage({ key: "randy" })

  function toggleTheme() {
    theme === "dark" ? setTheme("light") : setTheme(defaultTheme)
  }

  function submitTodoHandler(input: string) {
    if (todoContent?.length === undefined) {
      let todos: TodoTypes[] = [];
      todos.push(createNewTodo(input));
      updateState(JSON.stringify(todos));
    } else {
      const todo: [] = JSON.parse(todoContent);
      updateState(JSON.stringify([...todo, createNewTodo(input)]));
    }
  }

  function setActiveTodo(todo: TodoTypes) {
    setSelectedTodo(todo)
  }

  //* Selected Todo in for updating and removing from list

  function updateTodoHandler(todo:TodoTypes){
          
  }


  return (
    <AppContext.Provider value={{ theme, toggleTheme, submitTodoHandler, todoContent, selectedTodo, setActiveTodo, updateTodoHandler }}>
      {children}
    </AppContext.Provider>
  );
};
