import React, { Component } from 'react'
import { Todo } from '../../types/Todo'
import TodoButton from './TodoButton'


interface TodoItemProps {
  todo: Todo;
  handleClickConmplete: (event: React.MouseEvent<HTMLElement>) => void;
  handleClickDelete: (event: React.MouseEvent<HTMLElement>) => void;
}

class TodoItem extends Component<TodoItemProps> {
  render() {
    const { todo, handleClickConmplete, handleClickDelete } = this.props
    return (
      <>
        <p className={todo.isComplete ? 'full-opacity' : 'half-opacity'}>{todo?.title}</p>
        <div className='group-btn'>
          <TodoButton onClick={handleClickConmplete} 
          className={todo.isComplete ? 'icon full-opacity' : 'icon half-opacity'} >
            <i className="fa-solid fa-check"></i>
          </TodoButton>
          <TodoButton onClick={handleClickDelete} className='icon-delete'>
            <i className="fa-solid fa-xmark"></i>
          </TodoButton>
        </div>
      </>
    )
  }
}

export default TodoItem