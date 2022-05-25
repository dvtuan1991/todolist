import { listenerCount } from 'process';
import React, { Component } from 'react'
import { Todo } from '../../types/Todo'
import TodoButton from './TodoButton';
import Button from './TodoButton';
import TodoInput from './TodoInput';
import Input from './TodoInput';
import TodoItem from './TodoItem'

interface TodoListState {
  list: Todo[];
  value: string
}

class TodoList extends Component<{}, TodoListState> {
  constructor(props: Todo[]) {
    super(props);
    this.state = {
      list: [],
      value: ''
    }
  }

  componentDidMount() {
    const listTodo = [{
      id: 1,
      title: 'Learn HTMl/Css',
      isComplete: true
    },
    {
      id: 2,
      title: 'Learn Javasript',
      isComplete: false
    }]
    this.setState({ list: listTodo })
  }

 

  handleChangeValue = (e: React.FormEvent<HTMLInputElement>) => {
    let value: string = e.currentTarget.value;
    this.setState({ value: value })
  }

  handClickAdd = (e: React.MouseEvent<HTMLElement>) => {
    if (this.state.value) {
      const listTodo = [...this.state.list];
      if (listTodo.length > 1) {
        const listTodoId: number[] = listTodo.map(todo => todo.id);
        const maxId = Math.max(...listTodoId);
        listTodo.push({
          id: maxId + 1,
          title: this.state.value,
          isComplete: false
        });
      } else if (listTodo.length === 1) {
        let id = listTodo[0].id + 1;
        listTodo.push({
          id,
          title: this.state.value,
          isComplete: false
        })
      } else {
        listTodo.push({
          id: 1,
          title: this.state.value,
          isComplete: false
        })
      };
      this.setState({ list: listTodo, value: '' });
    }
  }

  handleClickDelete = (id: number) => {
    const newTodoList = this.state.list.filter(todo => todo.id !== id)
    this.setState({ list: newTodoList })
  }

  handleClickComplete = (id: number) => {
    const newTodoList = this.state.list.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
        return todo
      } else {
        return todo
      }
    })
    this.setState({ list: newTodoList })
  }

  handleClickClearAll = (event: React.MouseEvent<HTMLElement>) => {
    const notCompleteTodo = this.state.list.filter(todo => !todo.isComplete)
    this.setState({ list: notCompleteTodo })
  }

  render() {
    return (
      <div className='container'>
        <h3 className='heading'>You have {this.state.list.length} task for today</h3>
        <div className='todo-form'>
          <TodoInput name='Todo' placeholder='Add todo here' value={this.state.value} onChange={this.handleChangeValue} />
          <TodoButton onClick={this.handClickAdd} className='todo-button'>
            Add Todo
          </TodoButton>
        </div>
        {this.state.list.length > 0 &&
          <div>
            {this.state.list?.map(todo =>
              <div key={todo.id} className='todo-item'>
                <TodoItem todo={todo}
                  handleClickConmplete={(e) => this.handleClickComplete(todo.id)}
                  handleClickDelete={(e) => this.handleClickDelete(todo.id)} />
              </div>
            )}
            <TodoButton onClick={this.handleClickClearAll} className='clear-all' >
              Clear All Completed
            </TodoButton>
          </div>}
      </div>
    )
  }
}

export default TodoList