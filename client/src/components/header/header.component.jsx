import React from "react";

import "./header.styles.scss";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link className="header__text header__text-red" to="/players">
        TEAMS & PLAYERS CROSSHAIRS
      </Link>
      <Link className="header__text" target="_blank">CSGO RESOLUTIONS</Link>
      <Link className="header__text">FAQ</Link>
      <Link className="header__text header__text-signin" to="/signin">
        SIGN IN &#8594;
      </Link>
    </div>
  );
};

export default Header;
