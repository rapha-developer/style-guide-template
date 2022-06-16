import { useState } from 'react'
import logo from './logo.svg'

import './App.css'
import prefaceApi from './api/demo/preface.styleguide.api'
import headersApi from './api/demo/headers.styleguide.api'
import palettesApi from './api/demo/palettes.styleguide.api'
import typographyApi from "./api/demo/typography.styleguide.api"
import featuresApi from "./api/demo/features.styleguide.api"
import rulesApi from "./api/demo/rules.styleguide.api"

import Styleguide from './pages/Styleguide'

function App() {

  return (
    <div className="App">
      <Styleguide preface={prefaceApi} 
                  headers={headersApi} 
                  palettes={palettesApi}
                  typography={typographyApi}
                  features={featuresApi}
                  rules={rulesApi}
      />
    </div>
  )
}

export default App
