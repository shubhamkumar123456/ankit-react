import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <ul>
            <li> <Link to={'/'}>Home</Link> </li>
            <li> <Link to={'/xyz'}>About</Link> </li>

            {/* <li><a href="/">Home</a></li>
            <li><a href="/xyz">About</a></li> */}
        </ul>
    </div>
  )
}

export default Navbar
