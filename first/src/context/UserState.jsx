import React, { useState } from 'react'
import UserContext from './UserContext'

const UserState = (props) => {

    const [obj, setobj] = useState({
        name:"shubham",
        age:30,
        course:"fullstack"
    });


    // setobj({...obj , name:"ankit"})

    let x = 10;

    function xyz(){
        console.log("hello")
    }
 
  return (
    <UserContext.Provider value={{obj , setobj, xyz , x}}>
            {props.children}
    </UserContext.Provider>
  )
}

export default UserState
