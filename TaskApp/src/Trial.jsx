import React, { useState } from 'react'
import { FaEyeSlash } from "react-icons/fa";

const Trial = () => {

    // let x = false

    let text = "hello how are you"
    
    const[x , updateX] = useState(false) //true  // State define
    console.log(x)

    function handleCLick(){
        if(x===false){
            updateX(true)
        }
        else{
            updateX(false)
        }
    }


    // let y= 1;
    // if(y> 3){
    //     console.log("all good")
    // }
    // else{
    //     console.log("not good")
    // }

        // let y = 6
        // y>3 ? console.log("all good")  :  console.log("not good")
  return (
    <div>
      <h1> this is trial page</h1>
        <h1> {text} </h1>

        {/* true  */}
       { x  && <p>this is one</p>}


        {/* false */}
      {  !x && <p>this is two</p>}


        { x  ? <h1>This is One</h1> : <h2>This is Two</h2> }


        <button onClick={handleCLick}>click me</button>


        <div>
             <input type="password"  />
         <FaEyeSlash  />
        </div>
    </div>
  )
}

export default Trial
