import React, { useState } from 'react';
import TodoList from './WithClass/Component/TodoList';
import { TodoListReducer } from './WithHook/Component/TodoListReducer/TodoListReducer';
import TodoListReducerImmer from './WithHook/Component/TodoListReducer/TodoListReducerImmer';
import TodoListRedux from './WithHook/Component/TodoListRedux';
import TodoListReduxImmer from './WithHook/Component/TodoListReduxImmer';
import WithState from './WithHook/Component/WithState';

function App() {
  return (
    <>
      {/* <TodoList /> */}
      {/* <WithState /> */}
      {/* <TodoListReducer /> */}
      {/* <TodoListRedux />  */}
      {/* <TodoListReducerImmer /> */}
      <TodoListReduxImmer />
    </>
  );
}

export default App;
