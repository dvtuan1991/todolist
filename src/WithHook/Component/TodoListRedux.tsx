import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ActionTodoType } from '../../types/ReduceTodo'
import { Todo, ReduxStore } from '../../types/Todo'
import TodoButton from './TodoButton'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'



const TodoListRedux = () => {
  const [inputValue, setInputValue] = useState<string>();
  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleClickAdd = () => {
    inputValue  && inputValue.trim() !== ''
    && dispatch({type: ActionTodoType.ADD, payload: { id: Date.now(), title: inputValue, isComplete: false }})
    setInputValue('')
  }

  const reduxStore: ReduxStore = useSelector<ReduxStore, ReduxStore>(todo => todo)
  const listTodo: Todo[] = reduxStore.todoReduxReducer
  const dispatch = useDispatch()
  return (
    <div className='container'>
      <h2 className='heading'>Todo App with Redux</h2>
      <h3 className='heading'>You have {listTodo?.length} task for today</h3>
      <div className='todo-form'>
        <TodoInput name='Todo' placeholder='Add todo here' value={inputValue ? inputValue : ''} onChange={handleChangeValue} />
        <TodoButton onClick={handleClickAdd} className='todo-button'>
          Add Todo
        </TodoButton>
      </div>
      {listTodo && listTodo.length > 0 &&
        <div>
          {listTodo?.map((todo: Todo) => {
            return (
              <div key={todo.id} className='todo-item'>
              <TodoItem todo={todo}
                handleClickConmplete={(e) => dispatch({ type: ActionTodoType.Edit, payload: todo.id })}
                handleClickDelete={(e) => dispatch({ type: ActionTodoType.Delete, payload: todo.id })} />
            </div>
            )
          })
           
          }
          <TodoButton onClick={() => dispatch({ type: ActionTodoType.ClearAll })} className='clear-all' >
            Clear All Completed
          </TodoButton>
        </div>}
    </div>
  )
}

export default TodoListRedux