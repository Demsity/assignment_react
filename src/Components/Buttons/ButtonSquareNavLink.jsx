import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonSquareNavLink = ({ title, color, path }) => {
  return (
    <NavLink to={path} className={color}>{title}</NavLink>

  )
}

export default ButtonSquareNavLink