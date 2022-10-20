import React from 'react'
import ButtonSquare from '../Buttons/ButtonSquare'


const Showcase = () => {
  return (
    <div className='__showcase'>
        <div className='container'>
            <img src='/Images/showcase-left.png' alt="Gray woman sitting on chair" />
            <div className='__showcase-title'>
                <h2>SALE UP</h2>
                <h2>To 50% Off</h2>
                <p>Online shopping free home delivery over $100</p>
                <ButtonSquare title='SHOP NOW' color='__btn-red' />
            </div>
            <img src='/Images/showcase-right.png' alt="Gray man sitting" />
        </div>

    </div>
  )
}

export default Showcase