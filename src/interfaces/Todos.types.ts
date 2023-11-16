import { v4 } from "uuid";

export type TodoTypes = {
  id: typeof v4;
  title: string;
  isCompleted: boolean;
};
