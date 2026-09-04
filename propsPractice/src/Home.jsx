import React from 'react'
import SideBar from './SideBar' //function
import Navbar from './Navbar'  //function
import { useEffect } from 'react'


export const Dummy=()=>{
    return(
        <div>
            <p>I am Dummy Page</p>
        </div>
    )
}



const Home = (props) => {
    let x = 10
    let arr = [10, 20, 30, 40];

    console.log(props)
    
    useEffect(()=>{
        props.y(arr)
        
    },[])
  return (
    <div style={{backgroundColor:"aqua",padding:"10px"}}>
        {/* <SideBar/> */}
        <p>{props.x}</p>
        <div>
            <Navbar text={"i am coming from home"}  xyz={"blue"} />
            <Navbar text={"i am bla bla bla"}  xyz={"green"} />
            <Navbar text={"i am bla bla bla"}  xyz={"black"} />
        <SideBar data={x} ele = {props.x}/>
    </div>
      <h1>This is Home Page</h1>
      <p>{x}</p>

      <Dummy/>
    </div>
  )
}

export default Home
