import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className="Header">
        <nav className="navbar">
            <h1>Counter App</h1>
            <ul className="list">
                <li>Home</li>
                <li>Settings</li>
                
            </ul>
        </nav>
    </div>
  )
}

export default Header