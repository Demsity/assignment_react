import React from 'react'
import ButtonSquare from '../Buttons/ButtonSquare'

const Card = ({title, par, btnText, btnColor, img, imgAlt, classes, imgLeft}) => {

  // Made a prop for a left or right aligned image
  if (imgLeft){
    return (
      <div className={classes}>
          <img src={img} alt={imgAlt} />
          <div className='__card-text __card-text-left'>
              <h2>{title}</h2>
              <p>{par}</p>
              <ButtonSquare title={btnText} color={btnColor} />
          </div>
      </div>
    )} else {
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
}


export default Card 