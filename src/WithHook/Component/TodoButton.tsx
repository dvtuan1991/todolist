import React from 'react'
import { ButtonType } from '../../types/Button'

const TodoButton: React.FC<ButtonType> = ({onClick, className, children}) => {
  return (
    <a onClick={onClick} className={className} >
      {children}
    </a>
  )
}

export default TodoButton