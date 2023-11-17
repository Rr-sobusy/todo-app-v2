import { v4 as uuid } from "uuid";

export function createNewTodo(input: string) {
  return {
    id: uuid(),
    title: input,
    isCompleted: false,
  };
}
