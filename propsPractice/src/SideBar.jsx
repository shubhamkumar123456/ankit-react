import React from 'react'

const SideBar = (props) => {
    console.log(props)
  return (
    <div>
      <h1>I am Sidebar</h1>
      <p>{props.data}</p>
      <p>{props.ele}</p>
    </div>
  )
}




export default SideBar
