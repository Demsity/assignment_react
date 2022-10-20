import React from 'react'
import GridCard from '../Cards/GridCard'

function FeaturedGrid() {
    return (
        <div className="__grid-container">
            <h2>Featured Products</h2>
            <div className='__grid'>
                <GridCard 
                    productName='Modern Green Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/cloak-green.png'}
                    imgAlt='woman sitting with green cloak'
                />
                <GridCard 
                    productName='Modern White Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/white-cloak.png'}
                    imgAlt='woman standing with white cloak'
                />
                <GridCard 
                    productName='Modern Green Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/cloak-green.png'}
                    imgAlt='woman sitting with green cloak'
                />
                <GridCard 
                    productName='Modern Green Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/cloak-green.png'}
                    imgAlt='woman sitting with green cloak'
                />
                <GridCard 
                    productName='Modern Green Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/cloak-green.png'}
                    imgAlt='woman sitting with green cloak'
                />
                <GridCard 
                    productName='Modern White Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/white-cloak.png'}
                    imgAlt='woman standing with white cloak'
                />
                <GridCard 
                    productName='Modern White Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/white-cloak.png'}
                    imgAlt='woman standing with white cloak'
                />
                <GridCard 
                    productName='Modern White Cloak' 
                    category='Fashion'   
                    originalPrice={35.00}
                    discount={true}
                    discountPrice={30.00}
                    img={'/images/white-cloak.png'}
                    imgAlt='woman standing with white cloak'
                />
            </div>
        </div>

    )
}

export default FeaturedGrid