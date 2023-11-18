/**
 * ! This component is the wrapper for the context of todos context 
 * ! from local storage and theme context from application state
 */

import  { createContext, useState, ReactNode } from "react";
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
  submitTodoHandler: (input:string)=>void;
  todoContent: any;
};

export const AppContext = createContext<ProviderProps | undefined>(undefined);

export const ContextProvider = (props: Props) => {
  const { children } = props;
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const {todoContent, updateState} = useLocalStorage({key:"randy"})

  function toggleTheme() {
    theme === "dark" ? setTheme("light") : setTheme(defaultTheme)
  }

  function submitTodoHandler(input:string){
    if (todoContent?.length === undefined) {
      let todos:TodoTypes[] = [];
      todos.push(createNewTodo(input));
      updateState(JSON.stringify(todos));
    } else {
      const todo: [] = JSON.parse(todoContent);
      updateState(JSON.stringify([...todo, createNewTodo(input)]));
    }
  }

  return (
    <AppContext.Provider value={{ theme, toggleTheme , submitTodoHandler , todoContent}}>
      {children}
    </AppContext.Provider>
  );
};
