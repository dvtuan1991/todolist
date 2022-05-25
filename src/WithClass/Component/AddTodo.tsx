import React, { Component } from 'react'

export class AddTodo extends Component<{handleChangeAddtodo: Function, handleClickAddtodo: Function}> {
  render() {
    const {handleChangeAddtodo, handleClickAddtodo} = this.props
    return (
      <div>
          <input name='addTodo' placeholder='Add todo'  onChange={(e) => handleChangeAddtodo} />
          <button onClick={() => handleClickAddtodo}> Add Todo </button>
      </div>
    )
  }
}

export default AddTodo