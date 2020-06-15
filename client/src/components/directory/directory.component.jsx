import React from 'react'

import './directory.styles.scss';
import Logo from "../../assets/fnatic.png";
import Logo1 from "../../assets/astralis.png";

const Directory = () => {
  return (
    <div className="directory-menu">
      <div className="directory-item">
        <div className="directory-item__heading-box">
          <h3 className="directory-item__heading">Fnatic</h3>
        </div>
        <div className="directory-item__grey-box">
          <p className="directory-item__player">Brollan</p>
        </div>
        <div className="directory-item__white-box">
          <p className="directory-item__player">Golden</p>
        </div>
        <div className="directory-item__grey-box">
          <p className="directory-item__player">JW</p>
        </div>
        <div className="directory-item__white-box">
          <p className="directory-item__player">KRIMZ</p>
        </div>
        <div className="directory-item__grey-box">
          <p className="directory-item__player">flusha</p>
        </div>

        <div className="directory-item__logo">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <div className="directory-item">
        <div className="directory-item__heading-box a">
          <h3 className="directory-item__heading ">Astralis</h3>
        </div>
        <div className="directory-item__grey-box">
          <p className="directory-item__player">dev1ce</p>
        </div>
        <div className="directory-item__white-box">
          <p className="directory-item__player">dupreeh</p>
        </div>
        <div className="directory-item__grey-box">
          <p className="directory-item__player">gla1ve</p>
        </div>
        <div className="directory-item__white-box">
          <p className="directory-item__player">Magisk</p>
        </div>
        <div className="directory-item__grey-box">
          <p className="directory-item__player">Xyp9x</p>
        </div>

        <div className="directory-item__logo">
        <img src={Logo1} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

export default Directory;