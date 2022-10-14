import React from 'react'

const ButtonSquare = ({ title, color }) => {
  return (
    <button className={color}>{title}</button>
  )
}

export default ButtonSquare