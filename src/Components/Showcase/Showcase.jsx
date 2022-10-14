import React from 'react'
import leftImg from './Assets/showcase-left.png'
import rightImg from './Assets/showcase-right.png'
import ButtonSquare from '../Buttons/ButtonSquare'


const Showcase = () => {
  return (
    <div className='__showcase'>
        <div className='container'>
            <img src={leftImg} alt="Gray woman sitting on chair" />
            <div className='__showcase-title'>
                <h2>SALE UP</h2>
                <h2>To 50% Off</h2>
                <p>Online shopping free home delivery over $100</p>
                <ButtonSquare title='SHOP NOW' color='__btn-red' />
            </div>
            <img src={rightImg} alt="Gray man sitting" />
        </div>

    </div>
  )
}

export default Showcase