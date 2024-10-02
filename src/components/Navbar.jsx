import React from 'react'
import { NavLink } from 'react-router-dom'
import './styles/Navbar.css'

export default function Navbar() {
  return (
    <div className='navbar-container'>
      <ul className='navbar-list'>
         <NavLink className='navbar-item' to='/login'>LOGIN</NavLink>
         <NavLink className='navbar-item' to='/register'>REGISTER</NavLink>
         <NavLink className='navbar-item' to='/register'>GET</NavLink>
      </ul>

    </div>
  )
}
