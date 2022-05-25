import { ActionTodo, ActionTodoType } from "../types/ReduceTodo";
import { Todo } from "../types/Todo";

const init = [{
  id: 1,
  title: 'Learn HTMl/Css',
  isComplete: true
},
{
  id: 2,
  title: 'Learn Javasript',
  isComplete: false
}]

export const todoReduxReducer = (todoList: Todo[] = init, action: ActionTodo): Todo[] => {
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