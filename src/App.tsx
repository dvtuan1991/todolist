import React from 'react';

import WithState from './pages/WithState';
import NavBar from './NavBar';
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TodoListWithClass from './pages/TodoListWithClass';
import WithUseReducer from './pages/WithUseReducer';
import WithUseReduceImmer from './pages/WithUseReduceImmer';
import WithRedux from './pages/WithRedux';
import WithReduxImmer from './pages/WithReduxImmer';

function App() {
  return (
    <>
      <NavBar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/withclass" element={<TodoListWithClass />} />
        <Route path='/withstate' element={<WithState />} />
        <Route path='/usereduce' element={<WithUseReducer />} />
        <Route path='/usereduceimmer' element={<WithUseReduceImmer />} />
        <Route path='/redux' element={<WithRedux />} />
        <Route path='/reduximmer' element={<WithReduxImmer />} />
      </Routes>
    </>
  );
}

export default App;
