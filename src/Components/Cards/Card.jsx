import React from 'react'
import ButtonSquare from '../Buttons/ButtonSquare'

const Card = ({title, par, btnText, btnColor, img, imgAlt, classes}) => {
  return (
    <div className={classes}>
        <div className='__card-text'>
            <h2>{title}</h2>
            <p>{par}</p>
            <ButtonSquare title={btnText} color={btnColor} />
            
        </div>
        <img src={img} alt={imgAlt} />
    </div>
  )
}

export default Card