import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)


const handleAdd = () => {
  setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);
  // setCounter(counter + 1);


  setCounter((prev) => {
    return prev + 1;
  })
  setCounter((prev) => {
    return prev + 1;
  })
  setCounter((prev) => {
    return prev + 1;
  })


}


  return (
    <>
      <h3>Hello World || React With Chai || Ashraful Islam Asrf</h3>

      <h2>{counter}</h2>

      <button onClick={handleAdd} className="btn">Add </button>


    </>
  )
}

export default App


