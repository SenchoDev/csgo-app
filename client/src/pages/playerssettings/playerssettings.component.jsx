import React from 'react';


import { ReactComponent as Headset } from '../../assets/headset.svg'
import { ReactComponent as Mouse } from '../../assets/mouse-clicker.svg'
import { ReactComponent as Keyboard } from '../../assets/gaming.svg'
import { ReactComponent as MousePad } from '../../assets/virtual-reality.svg'
import { ReactComponent as Monitor } from '../../assets/television.svg'
import { ReactComponent as Hearts } from '../../assets/icons8-heart-outline-48-1.svg'

import './playerssettings.styles.scss'

const PlayersSettings = () => {
  return (
    <div className="settings">
      <div className="settings__block">

        <div className="settings__top">
          <img src={Hearts} alt="hey" className="smh"/>
          <h2 className="settings__heading">Brollan</h2>
          <span className="settings__team">Fnatic</span>
        </div>

        <div className="overview">
          <div className="overview_item">
            <Headset />
            <h3 className="overview__heading">Headset</h3>
          </div>
          <div className="overview_item">
            <Mouse />
            <h3 className="overview__heading">Monitor</h3>
          </div>
          <div className="overview_item">
            <Keyboard />
            <h3 className="overview__heading">Mouse</h3>
          </div>
          <div className="overview_item">
            <MousePad />
            <h3 className="overview__heading">Keyboard</h3>
          </div>
          <div className="overview_item">
            <Monitor />
            <h3 className="overview__heading">Mousepad</h3>
          </div>
          <div className="overview_item">
            <p className="overview__text">Turtle Beach Elite Pro</p>
          </div>
          <div className="overview_item">
            <p className="overview__text">Benq XL2546</p>
          </div>
          <div className="overview_item">
            <p className="overview__text">Zowie EC2-B</p>
          </div>
          <div className="overview_item">
            <p className="overview__text">Logitech G-PRO</p>
          </div>
          <div className="overview_item">
            <p className="overview__text">Logitech G-PRO</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default PlayersSettings;