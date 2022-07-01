import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg'

import './App.css'

import Home from "./pages/Home"
import PageOne from './pages/PageOne';
import Orion from './pages/Orion'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orion' element={<Orion />} />
        <Route path='/styleguide' element={<PageOne />} />
      </Routes>

    </div>
  )
}


export default App
