import React, { useEffect, useState } from 'react'

const CounterApp = () => {

    //variable and function decleration start here  ...
    
    let x = "hello how are you";
    // let count = 20;
    // const[state , updateStateFunction] = useState(value)
    const [count , setCount] = useState(20) //hello//22
    console.log(count)
    function handleClick(){
        // console.log("hello")
        // count = count+1;
        // console.log(count)
        setCount(count+1)
    }
  return (
    <div>
      <h1 className='heading'>This is Counter App</h1>
      <h3>{x}</h3>

        <h1>Count:  {count}</h1>
      <button onClick={handleClick}>Increment</button>
      <button>Decrement</button>
      <button>MultipleBy2</button>
      <button>DivideBy2</button>
      <button>reset</button>

      {/* <p id='demo'></p> */}

    </div>
  )
}

export default CounterApp
