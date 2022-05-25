import React from 'react'
import { InputType } from '../../types/Input'

const TodoInput: React.FC<InputType> = ({name, placeholder, value, onChange}) => {
  return (
    <input name={name} placeholder={placeholder} value={value} onChange={onChange} className='todo-input' />
  )
}

export default TodoInput