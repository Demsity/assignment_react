import React from 'react'
import Card from '../Cards/Card'

import promoImg1 from './Assets/news-1.png'
import promoImg2 from './Assets/news-2.png'

const PromoBanner = () => {
  return (
    <div className='container __promo-banner'>
        <Card 
            title='Winter Clearance Up to 70% Off!'
            par={
                'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apriam eaque ipsa quae ab illo inventore.'
            }
            btnText='SHOP NOW'
            btnColor='__btn-black'
            img={promoImg1}
            imgAlt='Gray Woman standing'
            classes={'__card __brown'}
        />
        <Card 
            title='Winter Clearance Up to 70% Off!'
            btnText='SHOP NOW'
            btnColor='__btn-black'
            img={promoImg2}
            imgAlt='Gray man standning'
            classes={'__card'}
        />
    </div>
  )
}

export default PromoBanner