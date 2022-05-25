import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionTodoType } from '../../types/ReduceTodo'
import { Todo } from '../../types/Todo'
import TodoButton from './TodoButton'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import produce from 'immer'

const TodoListReduxImmer = () => {
  const [inputValue, setInputValue] = useState<string>();
  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const listTodo: Todo[] = useSelector<any, any>(state => produce(state))
  console.log(listTodo);
  
  const dispatch = useDispatch()

  const handleClickAdd = () => {
    inputValue && dispatch({type: ActionTodoType.ADD, payload: { id: Date.now(), title: inputValue, isComplete: false }})
    setInputValue('')
  }
  return (
    <div className='container'>
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

export default TodoListReduxImmer

