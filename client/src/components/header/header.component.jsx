import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/user/user.selectors";

import "./header.styles.scss";

import { Link } from "react-router-dom";

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <Link className="header__text header__text-red" to="/players">
        TEAMS & PLAYERS CROSSHAIRS
      </Link>
      <a
        className="header__text"
        href="https://csgoresolutions.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CSGO RESOLUTIONS
      </a>
      <Link className="header__text" to="/signin">
        FAQ
      </Link>
      {currentUser ? (
        <h3 className="header__text header__text-signin">Sign Out &#8594;</h3>
      ) : (
        <Link className="header__text header__text-signin" to="/signin">
          Sign In &#8594;
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
