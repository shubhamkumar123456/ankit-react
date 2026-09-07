import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to={'/'}>Expense</Link></li>
        <li><Link to={'/form'}>Form</Link></li>
        <li><Link to={'/show'}>Show Data</Link></li>
        <li><Link to={'/counter'}>Counter</Link></li>
        <li><Link to={'/calc'}>Calculator</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
