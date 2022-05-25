import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReduxReducer } from './TodoReduxReducer'
import { todoReduxReducerImmer } from './TodoReduxReducerImmer'

const rootReducer = combineReducers({
  todoReduxReducer,
  todoReduxReducerImmer
})

export const store = createStore(rootReducer, composeWithDevTools(
 
  // other store enhancers if any
))


