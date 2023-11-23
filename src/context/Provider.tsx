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
const defaultTheme = "dark";

type Props = {
  children: ReactNode;
};

type ProviderProps = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  submitTodoHandler: (input: string) => void;
  todoContent: TodoTypes[] | string;
  selectedTodo?: TodoTypes;
  setActiveTodo: (todo: TodoTypes) => void;
  updateTodoHandler: (
    todo: TodoTypes | undefined,
    newValue: string | undefined
  ) => void;
  finishedHandler: (todo: TodoTypes | undefined) => void;
  removeHandler: (todo: TodoTypes | undefined) => void;
  selectedFilter: "All" | "Active" | "Completed" | string;
  selectFilter: (active:  "All" | "Active" | "Completed" | string) => void;
};

export const AppContext = createContext<ProviderProps | undefined>(undefined);

export const ContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedTodo, setSelectedTodo] = useState<TodoTypes>();
  const [selectedFilter, setSelectedFilter] = useState<
    "All" | "Active" | "Completed" | string
  >("All");

  const { todoContent, updateState } = useLocalStorage({ key: "randy" });

  function toggleTheme() {
    theme === "dark" ? setTheme("light") : setTheme(defaultTheme);
  }

  function submitTodoHandler(input: string) {
    if (todoContent?.length === undefined) {
      const todos: TodoTypes[] = [];
      todos.push(createNewTodo(input));
      updateState(JSON.stringify(todos));
    } else {
      const todo: [] = JSON.parse(todoContent || "");
      updateState(JSON.stringify([...todo, createNewTodo(input)]));
    }
  }

  function setActiveTodo(todo: TodoTypes) {
    setSelectedTodo(todo);
  }

  //* function for update the data in update btn click
  function updateTodoHandler(
    todo: TodoTypes | undefined,
    newValue: string | undefined
  ) {
    const storage: TodoTypes[] = JSON.parse(todoContent || "");
    const keyToFind = storage.findIndex(({ id }) => id === todo?.id);
    storage[keyToFind] = {
      id: storage[keyToFind].id,
      title: newValue,
      isCompleted: storage[keyToFind].isCompleted,
    };
    updateState(JSON.stringify(storage));
  }

  //* function for modifying the state -- isCompleted and setting it into true
  function finishedHandler(todo: TodoTypes | undefined) {
    const keyToEdit = todo?.id;
    const todos: TodoTypes[] = JSON.parse(todoContent || "");
    const toUpdate = todos.findIndex(({ id }) => id === keyToEdit);
    todos[toUpdate].isCompleted = true;
    updateState(JSON.stringify(todos));
  }

  //* function for removing the selected todo from lists
  function removeHandler(todo: TodoTypes | undefined) {
    const keyToRemove = todo?.id;
    const todos: TodoTypes[] = JSON.parse(todoContent || "");
    const newTodos = todos.filter(({ id }) => id !== keyToRemove);
    updateState(JSON.stringify(newTodos));
  }

  function selectFilter(filterName:string){
      setSelectedFilter(filterName)
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        submitTodoHandler,
        todoContent,
        selectedTodo,
        setActiveTodo,
        updateTodoHandler,
        finishedHandler,
        removeHandler,
        selectedFilter,
        selectFilter
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
