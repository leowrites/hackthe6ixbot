import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useState, useEffect } from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path='questions' element={<Questions />} />
          <Route path='advisors' element={<Advisors />} />
          <Route path='signin' element={<Signin />} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
