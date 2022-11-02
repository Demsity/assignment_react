import React from 'react'
import { NavLink } from 'react-router-dom'

const ButtonSquare = ({ title, color, path }) => {
  return (
    <button to={path} className={color}>{title}</button>

  )
}

export default ButtonSquare