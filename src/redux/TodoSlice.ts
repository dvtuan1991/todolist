import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ActionTodo, ActionTodoType } from "../types/ReduceTodo";
import { Todo } from "../types/Todo";
export const todoSlice = createSlice({
  name: 'Todo',
  initialState: [] as Todo[],
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {state.push(action.payload)},
    edit: (state, action: PayloadAction<number>) => {
     const todo = state.find(todo => todo.id === action.payload);
   if(todo){
     todo.isComplete = !todo.isComplete
   }  
    },
    delete: (state, action: PayloadAction<number>) => {
      
    }
  }
})