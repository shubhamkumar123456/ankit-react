import { createContext, useState } from "react";

export const ThemeContext = createContext();



import React from 'react'

const ThemeState = (props) => {
    const [color, setcolor] = useState("black");
  return (
    <ThemeContext.Provider value={{color, setcolor}} >
        <div style={{backgroundColor:color, color:"white", minHeight:"50vh"}}>
            {props.children}
        </div>
    </ThemeContext.Provider>
  )
}

export default ThemeState
