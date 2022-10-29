import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
      <div className='Header'>
        <h1>SFPOPOS</h1>
        <div className='Title-Subtitle'>San Franciscos Privately Owned Public Open Spaces</div>

      <nav>
        <NavLink 
          className='nav-link' 
          activeClassName='nav-link-active'
          exact
          to="/">List</NavLink>
          
        <NavLink 
          className='nav-link'
          activeClassName='nav-link-active'
          to="/about">About</NavLink>
      </nav>

      </div>
    </div>
  )
}

export default Header;