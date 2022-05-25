import React, { useReducer, useState } from 'react'
import { ActionTodo, ActionTodoType } from '../../../types/ReduceTodo';
import { todoReducer } from './ReducerTodo'
import { Todo } from '../../../types/Todo';
import TodoButton from '../TodoButton';
import TodoInput from '../TodoInput';
import TodoItem from '../TodoItem';

const init = [
  {
  id: 1,
  title: 'Learn HTMl/Css',
  isComplete: true
},
{
  id: 2,
  title: 'Learn Javasript',
  isComplete: false
}
]

export const TodoListReducer = () => {
  const [listTodo, dispatch] = useReducer(todoReducer, init)
  const [inputValue, setInputValue] = useState<string>();

  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickAdd = () => {
    if (inputValue) {
      const todo: Todo = { id: Date.now(), title: inputValue, isComplete: false }
      const action: ActionTodo = { type: ActionTodoType.ADD, payload: todo }
      dispatch(action);
      setInputValue('')
    }
  }

  return (
    <div className='container'>
      <h2 className='heading'>Todo App with UseReducer</h2>
      <h3 className='heading'>You have {listTodo?.length} task for today</h3>
      <div className='todo-form'>
        <TodoInput name='Todo' placeholder='Add todo here' value={inputValue ? inputValue : ''} onChange={handleChangeValue} />
        <TodoButton onClick={handleClickAdd} className='todo-button'>
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
          <TodoButton onClick={() => dispatch({ type: ActionTodoType.ClearAll })} className='clear-all' >
            Clear All Completed
          </TodoButton>
        </div>}
    </div>
  )
}
