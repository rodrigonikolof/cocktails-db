import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="nav-center">
        <Link to='/cocktails-db/'>
          <img src={logo} alt="cocktail db logo" className='logo'/>
          </Link> 
          <ul className="nav-links">
            <li>
              <Link to="/cocktails-db/">Home</Link>
            </li>
            <li>
              <Link to="/cocktails-db/about">About</Link>
            </li>
          </ul>
      </div>
    </nav>
  )
}

export default Navbar
