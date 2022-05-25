
import produce from "immer";
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

export const todoReduxReducerImmer = (todoList: Todo[] = init, action: ActionTodo): Todo[] => 
  produce(todoList, (draft: Todo[])  => {
    const { type, payload } = action;
    switch (type) {
      case ActionTodoType.ADD: {
        console.log(draft)
        draft.push(payload as Todo)
        break;
      };
      case ActionTodoType.Edit: {
        const todo = draft.find((todo: Todo) => todo.id === payload)
        if (todo) {
          todo.isComplete = !todo.isComplete
        }
        break;
      };
      
      case ActionTodoType.Delete: {
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].id === payload) {
            draft.splice(i, 1);
          }
        }
        break
      }
      case ActionTodoType.ClearAll:
        for (let i = 0; i < draft.length; i++) {
          if (draft[i].isComplete) {
            draft.splice(i, 1);
          }
        }
        break;
      default:
        return draft
    }
  })


