
import './App.css'

import { createContext, useState } from "react"
const context = createContext(0)

function App() {
  const [count, setCount]=useState(0)


  return (
    <context.Provider value={[count, setCount]}>
    <div className="Header">{count} </div>
    <div className="Main"><div>{count} </div> 
      <button onClick={() => setCount((prev => prev +1))}>click me</button>
    </div>
    <div className="Footer">{count} </div>
    </context.Provider>
  )
}

export default App
