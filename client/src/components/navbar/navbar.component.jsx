import React from "react";

import "./navbar.styles.scss";

import Logo from "../../assets/LogoMakr_0oEW5U.png";
import  PinkHeart from '../../assets/icons8-heart-outline-48.svg'
import  PurpleHeart  from '../../assets/icons8-heart-outline-48-1.svg'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__img-box" to="/">
        <img src={Logo} alt="Logo" />
      </Link>
      <ul className="navbar__list">
        <li>
          <Link
            className="navbar__item navbar__link--active"
            to="/players_settings"
          > 
            <h3 className="navbar__text">Favorite Settigns</h3>
            <img className="navbar_heart" src={ PinkHeart } alt="hearts"/>
          </Link>
        </li>
        <li>
          <Link
            className="navbar__item navbar__link--active"
            to="/players_settings"
          > 
            <h3 className="navbar__text">Favorite Settings</h3>
            <img className="navbar__hearts" src={PurpleHeart} alt="hearts"/>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
