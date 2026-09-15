// rafce , rfce, rfc ,rafc

import React, { useContext } from 'react'
import Navbar from './Navbar'
import UserContext from './context/UserContext'
import ThemeState from './context/ThemeContext';

const Home = () => {
   let ctx = useContext(UserContext);
   console.log(ctx)
  return (
    <ThemeState>
        <Navbar/>
      <h1>This is Home Page</h1>
      <p>{ctx.x}</p>

      <div>
        <p>{ctx.obj.name}</p>
        <p>{ctx.obj.age}</p>
        <p>{ctx.obj.course}</p>
      </div>
    </ThemeState>
  )
}

export default Home



