import React from 'react'

export const BridgeAddress = ({ isHome, reverse }) => {
  const { REACT_APP_UI_STYLES } = process.env

  const getAddress = () =>
    isHome ? <div className="home-address-container" /> : <div className="foreign-address-container" />

  return isHome ? (
    <div className={`bridge-home bridge-home-${REACT_APP_UI_STYLES}`}>
      <div className="bridge-home-container">
        <div className="home-logo-container">
          <div className={reverse ? 'foreign-logo' : 'home-logo'} />
        </div>
      </div>
      {getAddress()}
    </div>
  ) : (
    <div className={`bridge-foreign bridge-foreign-${REACT_APP_UI_STYLES}`}>
      {getAddress()}
      <div className="bridge-foreign-container">
        <div className="foreign-logo-container">
          <div className={reverse ? 'home-logo' : 'foreign-logo'} />
        </div>
      </div>
    </div>
  )
}
