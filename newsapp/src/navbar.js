import React from 'react'
import { Link } from "react-router-dom";
import './navbar.css'
function Navbar() {
  return (
    <div className="nav-component">
        <h2><span>N</span>ews <span>H</span>unt</h2>
        <div className="links">
            <Link to='/' id='link'>Top Headings</Link>
            <Link to='/business' id='link'>Business</Link>
            <Link to='/article' id='link'>Article</Link>
        </div>
    </div>
  )
}

export default Navbar