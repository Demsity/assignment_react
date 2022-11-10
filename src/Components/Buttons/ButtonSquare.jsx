import React from 'react'

const ButtonSquare = ({ title, color, path }) => {
  return (
    <button data-testid='buttonSquare' to={path} className={color}>{title}</button>

  )
}

export default ButtonSquare