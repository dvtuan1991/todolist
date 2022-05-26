import React, { useState } from 'react';
import { useImmerReducer } from 'use-immer';
import { ActionTodoType } from '../../../types/ReduceTodo'
import TodoInput from '../../../WithClass/Component/TodoInput'
import TodoButton from '../TodoButton'
import TodoItem from '../TodoItem'
import { todoReducerImmer } from './ReducerTodoImmer';

const TodoListReducerImmer = () => {
  const [listTodo, dispatch] = useImmerReducer(todoReducerImmer, [{ id: 1, title: 'Hi', isComplete: false }])
  const [inputValue, setInputValue] = useState<string>();

  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickAdd = () => {
    inputValue && inputValue.trim() !== '' 
    && dispatch({type: ActionTodoType.ADD, payload: { id: Date.now(), title: inputValue, isComplete: false }})
    setInputValue('')
  }

  return (
    <div className='container'>
      <h2 className='heading'>Todo App with UseReducer Immer</h2>
      <h3 className='heading'>You have {listTodo?.length} task for today</h3>
      <div className='todo-form'>
        <TodoInput name='Todo' placeholder='Add todo here' value={inputValue ? inputValue : ''} onChange={handleChangeValue} />
        <TodoButton
          onClick={handleClickAdd}
          className='todo-button'>
          Add Todo
        </TodoButton>
      </div>
      {listTodo && listTodo.length > 0 &&
        <div>
          {listTodo?.map(todo =>
            <div key={todo.id} className='todo-item'>
              <TodoItem todo={todo}
                handleClickConmplete={(e) => dispatch({ type: ActionTodoType.Edit, payload: todo.id })}
                handleClickDelete={(e) => dispatch({ type: ActionTodoType.Delete, payload: todo.id })} />
            </div>
          )}
          <TodoButton onClick={() => dispatch({ type: ActionTodoType.ClearAll})} className='clear-all' >
            Clear All Completed
          </TodoButton>
        </div>}
    </div>
  )
}

export default TodoListReducerImmer