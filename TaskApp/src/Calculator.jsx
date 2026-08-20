import React, { useRef } from 'react'

const Calculator = () => {

    // Hook --> useRef Hook gives u object
    let tag = useRef()  // {current: undefined}
    console.log(tag)

        let jhola = ""
    function handleClick(val){
        console.log(val)
        console.log(tag) //{current:span};
        console.log(tag.current)  // span
        jhola = jhola + val
        tag.current.innerHTML = jhola;
    }

    function handleSolve(){
        let ans = eval(jhola);
        tag.current.innerHTML = ans;
    }

    function handleClean(){
        jhola = "";
        tag.current.innerHTML = "0";
    }
  return (
    <div className='calculatorPage'>
      <h1>Calculator</h1>

      <div className='calculator'>
        <span ref={tag}>0</span>
        <div className='calculatorButtons'>
            <button onClick={()=>handleClick('*')}>X</button>
            <button onClick={()=>handleClick('/')}>/</button>
            <button onClick={()=>handleClick('-')}>-</button>
            <button onClick={()=>handleClick('+')}>+</button>
            <button onClick={handleClean}>C</button>
            <button onClick={()=>handleClick(9)}>9</button>
            <button onClick={()=>handleClick(8)}>8</button>
            <button onClick={()=>handleClick(7)}>7</button>
            <button onClick={()=>handleClick(6)}>6</button>
            <button onClick={()=>handleClick(5)}>5</button>
            <button onClick={()=>handleClick(4)}>4</button>
            <button onClick={()=>handleClick(3)}>3</button>
            <button onClick={()=>handleClick(2)}>2</button>
            <button onClick={()=>handleClick(1)}>1</button>
            <button onClick={()=>handleClick(0)}>0</button>
            <button onClick={()=>handleClick('.')}>.</button>
            <button onClick={handleSolve}>=</button>
            <button onClick={()=>handleClick('%')}>%</button>
        </div>
      </div>
    </div>
  )
}

export default Calculator
