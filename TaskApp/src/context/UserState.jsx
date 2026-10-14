import React, { useState } from 'react'
import userContext from './userContext';

const UserState = ({children}) => {
    // this is global state(variable)
        let [userData , setUserData] = useState({
            name:"john",
            email:"john@gmail.com",
            password:"1234567"
        })



        function changeName(val){
                
        }

        // changeName("undertaker")

        // CRUD --> state defined , State update , state delete
  return (
    <userContext.Provider   value={{userData,setUserData,changeName}}>
            {children}
    </userContext.Provider>
  )
}

export default UserState
