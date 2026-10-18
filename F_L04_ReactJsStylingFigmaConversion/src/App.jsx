import { useState } from 'react'
import './index.css'
import './App.css'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />
    </>
  )
}

export default App
