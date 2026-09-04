import React from 'react'
import Home from './Home'
import About from './About'
import { useState } from 'react'
const App = () => {
  let x = "i am john"

  const [arr, setarr] = useState([]); //[] , //[10, 20, 30, 40]
  function xyz(ans){
    console.log(ans) //[10, 20, 30, 40];
    setarr(ans)
  }

  return (
    <div>

      {
        arr.map((ele, i)=>{
          return <p>{ele}</p>
        })
      }

      <Home x={x} y = {xyz} />
      <About/>
    </div>
  )
}

export default App
