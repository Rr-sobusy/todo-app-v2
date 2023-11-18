import { v4 as uuid } from "uuid";
import { TodoTypes } from "../../../interfaces/Todos.types";

export function createNewTodo(input: string): TodoTypes {
  return {
    id: uuid(),
    title: input,
    isCompleted: false,
  };
}
