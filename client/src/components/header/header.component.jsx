import React from "react";

import "./header.styles.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__text header__text-red" to="/players">
        TEAMS & PLAYERS CROSSHAIRS
      </Link>
      <a className="header__text" href="https://csgoresolutions.com/" target="_blank" rel="noopener noreferrer" >CSGO RESOLUTIONS</a>
      <Link className="header__text">FAQ</Link>
      <Link className="header__text header__text-signin" to="/signin">
        Sign In &#8594;
      </Link>
    </div>
  );
};

export default Header;
