import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';
function NavBar() {
  return (
    <nav>
        <h1>Todo</h1>
        <div className='navlinks'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/tasks'>Tasks</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
        </div>
    </nav>
  )
}

export default NavBar