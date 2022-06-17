import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import logo from './logo.svg'

import './App.css'
import prefaceApi from './api/demo/preface.styleguide.api'
import headersApi from './api/demo/headers.styleguide.api'
import palettesApi from './api/demo/palettes.styleguide.api'
import typographyApi from "./api/demo/typography.styleguide.api"
import featuresApi from "./api/demo/features.styleguide.api"
import rulesApi from "./api/demo/rules.styleguide.api"

import Home from "./pages/Home"
import PageOne from './pages/PageOne';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/styleguide' element={<PageOne />} />
      </Routes>

    </div>
  )
}


export default App
