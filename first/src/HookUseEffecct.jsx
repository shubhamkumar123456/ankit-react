
import { useEffect } from 'react';
import { useState } from 'react';

const HookUseEffecct = () => {

    const [count, setCount] = useState(0);//0//1//2
    
    useEffect(()=>{
        for(let i=0; i<=3; i++){
        console.log(" i = ", i)
        }
    },[count]) // 0//1//2
    
    console.log(count)
    function handleIncrement(){
       
        setCount(count+1)
    }

  
  return (
    <div>
        <h1>This is UseEffect Hook Component</h1>

        <p>Count:{count}</p>
        <button onClick={handleIncrement}>Click me</button>
    </div>
  )
}

export default HookUseEffecct
