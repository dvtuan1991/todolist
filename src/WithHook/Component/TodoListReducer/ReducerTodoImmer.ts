
import { ActionTodo, ActionTodoType } from "../../../types/ReduceTodo";
import { Todo } from "../../../types/Todo";

export const todoReducerImmer = (todoList: Todo[], action: ActionTodo): Todo[] => {
  const { type, payload } = action;
  switch (type) {
    case ActionTodoType.ADD: {
       todoList.push(payload as Todo)
       return todoList;
    };
    case ActionTodoType.Edit: {
      for(let todo of todoList) {
        if(todo.id === payload) {
          todo.isComplete = !todo.isComplete;
        } 
      }
      return todoList
    };
    case ActionTodoType.Delete: {
      return todoList.filter(todo => todo.id !== payload);
    }
    case ActionTodoType.ClearAll: 
      return todoList.filter(todo => !todo.isComplete)

    default:
      return todoList;
  }
}