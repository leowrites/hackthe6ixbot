import './App.css';

import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Outlet, BrowserRouter as Router } from 'react-router-dom'
import Layout from './Layout'
import Home from './features/Home'
import Question from './features/Question'
import Advisor from './features/Advisor'
import Signin from './features/Signin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path='/questions' element={<Question />} />
          <Route path='/advisors' element={<Advisor />} />
          <Route path='/signin' element={<Signin />} />
        </Route>
      </Routes>
      <header className="App-header">
        <Layout />
      </header>

    </div>
  );
}

export default App;
