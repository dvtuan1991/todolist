import { Todo } from "./Todo";

export enum ActionTodoType {
  ADD = 'TODO-ADD',
  Edit = 'TODO-EDIT',
  Delete = 'TODO-DELETE',
  ClearAll = 'TODO-CLEARALL'
}

export interface ActionTodo {
  type: ActionTodoType;
  payload?: Todo | number
}