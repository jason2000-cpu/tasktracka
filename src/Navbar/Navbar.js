import React from 'react'
import './Navbar.css'

import logo from '../image/logo.svg'

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
                <li>Home</li>
                <li>Profile</li>
                <li>Logout</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar