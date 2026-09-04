import React from 'react'

const Navbar = ( props) => {
  console.log(props) // {}
  return (
    <div style={{backgroundColor:props.xyz, color:"white"}}>
      <h1>This is Navbar</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default Navbar
