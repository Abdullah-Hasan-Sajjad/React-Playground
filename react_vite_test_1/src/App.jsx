import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='App'></div>
      <Accordian />
    </>
  )
}

export default App
