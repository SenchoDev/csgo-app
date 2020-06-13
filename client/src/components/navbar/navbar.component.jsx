import React from 'react';

import './navbar.styles.scss'

import Logo  from "../../assets/LogoMakr_0oEW5U.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__img-box">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="navbar__list">
        
      </div>
    </div>
  )
}

export default Navbar;