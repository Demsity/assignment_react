import React from 'react'

const ButtonRound = ({icon, badge}) => {
  return (
    <a href='#' className='__round-button'>
      <i className={icon}></i>
      {/* Fix badges on only last 2 buttons */}
      <span className='badge badge-pill badge-danger __badge-pill'>{badge}</span>
    </a>
  )
}

export default ButtonRound