import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
// import { Socket } from 'socket.io'
import Socket from './Component/Socket'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Socket/>
    </div>
  )
}

export default App
