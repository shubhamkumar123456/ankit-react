import React, { useReducer, useState } from 'react'

const PracticeReducer = () => {
    // let x = 10
    // const [count, setcount] = useState(10);
    // console.log(count);


    // const[state , dispatch] = useReducer(reducers , value)
    function reducers(state,action){
        if(action.type === "increment karwao"){
            return state +1
        }
        if(action.type ==="decrement karwao"){
            return state - 1
        }
    }
    const[state , dispatch] = useReducer(reducers , 10)

    //dispatch ---> provide action(koi kaam do, batao mujhe ki kais type se state change krni hai)

//using useState
    // function handleIncrement(){
    //     // setcount(count+1);  //11
    //     // setcount(count+1);  //11
    //     // setcount(count+1);  //11


    //     // setcount((prev)=>prev+1) // 11
    //     // setcount((prev)=>prev+1) //  12
    //     // setcount((prev)=>prev+1) //  13
    // }


    function handleIncrement(){
         dispatch({type:"increment karwao"})  //action
    }
  return (
    <div>
      <h1>Use Reducer Hook</h1>
        <h3> Count: {state}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={()=>dispatch({type:"decrement karwao"})}>Decrement</button>
    </div>
  )
}

export default PracticeReducer
