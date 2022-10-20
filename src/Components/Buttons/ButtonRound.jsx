import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonRound = ({icon, badge, link, hideOnMobile,}) => {

  return (
    <NavLink className={`__round-button ${hideOnMobile ? "hiddenOnMobile" : ""}`} to={link}>
      <i className={icon}></i>
      <span className='badge badge-pill badge-danger __badge-pill'>{badge}</span>
    </NavLink>
  )
}

export default ButtonRound