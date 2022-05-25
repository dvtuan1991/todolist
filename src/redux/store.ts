import { createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { todoReduxReducer } from './TodoReduxReducer'
import { todoReduxReducerImmer } from './TodoReduxReducerImmer'

export const store = createStore(todoReduxReducerImmer)


