import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import PageDemo from './pages/PageDemo'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <PageDemo />
    </div>
  )
}

export default App
