import React, { useContext, useRef } from 'react'
import Navbar from './Navbar'
import UserContext from './context/UserContext'
import ThemeState from './context/ThemeContext';

const About = () => {
  let ctx = useContext(UserContext);
  console.log(ctx)
  console.log(ctx.obj)  // {name:"shubham", age:30, course:"fullstack"}  //ankit
  let inputRef = useRef()  // {current : undefined}  {current:<input/>};

  function handleSubmit(){
    let value = inputRef.current.value; //ankit
    console.log(value)
    ctx.setobj({...ctx.obj, name:value})  
  }
  return (
    <ThemeState>
        <Navbar/>
      <h1>This is About page</h1>
      <p>{ctx.x}</p>
      <div>
        <p>{ctx.obj.name}</p>
        <p>{ctx.obj.age}</p>
        <p>{ctx.obj.course}</p>
      </div>

      <input  ref={inputRef} type="text" placeholder='enter a new name'/>
      <button onClick={handleSubmit}>Update name</button>
    </ThemeState>
  )
}

export default About
