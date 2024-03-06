import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestTailwind from './components/testTailwindcss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'></div>
      <TestTailwind />
    </>
  )
}

export default App
