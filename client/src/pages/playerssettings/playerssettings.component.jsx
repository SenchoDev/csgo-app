import React from 'react';

import Settings from '../../components/settings-overview/settings-overview.component'

import PurpleHeart from '../../assets/purple.png'

import './playerssettings.styles.scss'

const PlayersSettings = () => {
  return (
    <div className="settings">
      <div className="settings__block">

        <div className="settings__top">
          <img src={PurpleHeart} alt="hey" className="smh"/>
          <h2 className="settings__heading">Brollan</h2>
          <span className="settings__team">Fnatic</span>
        </div>
        <Settings/>
        
      </div>
      
    </div>
  )
}

export default PlayersSettings;