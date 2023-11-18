import { generateId } from "./generateRandomId";
import { TodoTypes } from "../../../interfaces/Todos.types";

export function createNewTodo(input: string): TodoTypes {
  return {
    id: generateId(),
    title: input,
    isCompleted: false,
  };
}
