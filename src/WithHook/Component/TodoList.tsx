
import React, { useEffect, useState } from 'react'
import { Todo } from '../../types/Todo'
import TodoButton from './TodoButton'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const TodoList = () => {
  const [inputValue, setInputValue ] = useState<string>()
  const[listTodo, setListTodo] = useState<Todo[]>([])
 
  const handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  useEffect(() => {
    const list = [{
      id: 1,
      title: 'Learn HTMl/Css',
      isComplete: true
    },
    {
      id: 2,
      title: 'Learn Javasript',
      isComplete: false
    }];
    setListTodo(list)
  },[])
  const handClickAdd = () => {
    if(inputValue) {
    const list = [...listTodo];
    list.push({id : Date.now(), title: inputValue, isComplete: false});
    setListTodo(list)
    setInputValue('')
    }
  };

  const handleClickComplete = (id: number) => {
    const newTodoList = listTodo.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
        return todo
      } else {
        return todo
      }
    })
    setListTodo(newTodoList)
  };

  const handleClickDelete = (id: number) => {
    const newTodoList = listTodo.filter(todo => todo.id !== id);
    setListTodo(newTodoList);
  };

  const handleClickClearAll = () => {
    const notComplete = listTodo.filter(todo => !todo.isComplete);
    setListTodo(notComplete);
  }

  return (
    <div className='container'>
        <h2 className='heading'>Todo App with State</h2>
        <h3 className='heading'>You have {listTodo?.length} task for today</h3>
        <div className='todo-form'>
          <TodoInput name='Todo' placeholder='Add todo here' value={inputValue ? inputValue : ''} onChange={handleChangeValue} />
          <TodoButton onClick={handClickAdd} className='todo-button'>
            Add Todo
          </TodoButton>
        </div>
        {listTodo && listTodo.length > 0 &&
          <div>
            {listTodo?.map(todo =>
              <div key={todo.id} className='todo-item'>
                <TodoItem todo={todo}
                  handleClickConmplete={(e) => handleClickComplete(todo.id)}
                  handleClickDelete={(e) => handleClickDelete(todo.id)} />
              </div>
            )}
            <TodoButton onClick={handleClickClearAll} className='clear-all' >
              Clear All Completed
            </TodoButton>
          </div>}
      </div>
  )
}

export default TodoList