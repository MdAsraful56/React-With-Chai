import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(10);

  const Add = () => { 
    setCount(count + 1);
  }

  const Remove = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h2>{count}</h2>
      <button onClick={Add} className="btn">Add</button>
      <button onClick={Remove} className="btn">Remove</button>
    </>
  )
}

export default App
