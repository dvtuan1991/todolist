import React, { Component } from 'react'
import { InputType } from '../../types/Input'

export default class TodoInput extends Component<InputType> {
  render() {
    const {name, placeholder, value, onChange} = this.props
    return (
      <input name={name} placeholder={placeholder} value={value} onChange={onChange} className='todo-input' />
    )
  }
}
