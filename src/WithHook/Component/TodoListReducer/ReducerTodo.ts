import { ActionTodo, ActionTodoType } from "../../../types/ReduceTodo";
import { Todo } from "../../../types/Todo";

export const todoReducer = (todoList: Todo[], action: ActionTodo): Todo[] => {
  const { type, payload } = action;
  switch (type) {
    case ActionTodoType.ADD: {
      return [...todoList, payload as Todo];
    };
    case ActionTodoType.Edit: {
      return [...todoList].map(todo => {       
        if (todo.id === payload) {        
          return {...todo, isComplete: !todo.isComplete}
        } else {
          return todo
        }
      });
    };
    case ActionTodoType.Delete: {
      return [...todoList].filter(todo => todo.id !== payload);
    }
    case ActionTodoType.ClearAll: 
      return [...todoList].filter(todo => !todo.isComplete)

    default:
      return todoList;
  }
}