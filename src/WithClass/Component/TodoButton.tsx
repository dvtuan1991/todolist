import React, { Children, Component } from 'react'
import { ButtonType } from '../../types/Button'
export default class TodoButton extends Component<ButtonType, {}> {
  render() {
    const {className, onClick, children } = this.props
    return (
      <a onClick={onClick} className={className} >
        {children}
      </a>
    )
  }
}
