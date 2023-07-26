import React from 'react'
import './Navbar.css'

import logo from '../image/logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='bodi'>
        <div className='logo'>
            <h2>Task</h2>
            <img src={logo} id='icon' alt='logo'/>
        <h2>Tracka</h2>
        </div>
        <div className='nav'>
            <ul>
                <Link to={'/home'} style={{textDecoration:'none', fontWeight:'bold', color:'rgba(54, 120, 100, 1)'}}><li>Home</li></Link>
                <Link to={'/'} style={{textDecoration:'none', fontWeight:'bold', color:'rgba(54, 120, 100, 1)'}}><li>Profile</li></Link>
                <Link to={'/login'} style={{textDecoration:'none', fontWeight:'bold', color:'rgba(54, 120, 100, 1)'}}><li>Logout</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar