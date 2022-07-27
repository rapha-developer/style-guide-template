import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Page from './pages/Page'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <Page />
    </div>
  )
}

export default App
