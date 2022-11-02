import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function Product( { product } ) {
    const [amount, setAmount] = useState(1)

    const incrementValue = () => {
        setAmount(prevAmount => prevAmount +1)
    }

    const decrementValue = () => {
        if (amount !== 1) {
            setAmount(prevAmount => prevAmount -1)
        }
        return
    }


    const handleSubmit = (e) => {
        e.preventDefault()
    }
  return (
    <>
        <section>
            <div className='container __product-container'>
                <div className='__product-grid'>
                    <div className='__img-wrapper'>
                        <img className='__img-big' src={product.imageName} alt={product.name} />
                        <div className='__img-small-wrapper'>
                            <img className='__img-small' src={product.imageName} alt={product.name} />
                            <img className='__img-small' src={product.imageName} alt={product.name} />
                            <img className='__img-small' src={product.imageName} alt={product.name} />
                        </div>
                    </div>
                    <div className='__text-wrapper'>
                        <div className='__product-grid-text'>
                            <h3 className='__product-name'>{product.name}</h3>
                            <div className='__product-details'>
                                <p>sku: {product.articleNumber}</p>
                                <p>Brand: northland</p>
                            </div> 
                            <div className='__product-rating'>
                                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                                <i className="fa-sharp fa-solid fa-star-sharp"></i>
                            </div>
                            <div className='__product-price'>
                                <p className='__product-discountprice'>{'$'+ product.price.toFixed(2)}</p>
                            </div>
                            <p className='__product-summary'>{product.description === '' ? 'Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. (read more) ' : `${product.description}` } </p>
                        </div>
                    
                    <form onSubmit={handleSubmit}>
                        <div id='size'>
                            <label className='__product-form-label' name='size'>Size:</label>
                            <div className='__radio'>
                                <input name='size' id='size-s' value='s' type="radio" />
                                <label htmlFor='size-s'><p>S</p></label>
                            </div>
                            <div className='__radio'>
                                <input name='size' id='size-m' value='m' type="radio" />
                                <label htmlFor='size-m'><p>M</p></label>
                            </div>
                            <div className='__radio'>
                                <input name='size' id='size-l' value='l' type="radio" />
                                <label htmlFor='size-l'><p>L</p></label>
                            </div>
                            <div className='__radio'>
                                <input name='size' id='size-xl' value='xl' type="radio" />
                                <label htmlFor='size-xl'><p>XL</p></label>
                            </div>
                        </div>
                        <div id='color'>
                        <label className='__product-form-label' name='color'>Color:</label>
                        <select defaultValue='' className='__select-color' name='color'>
                            <option value="" disabled>Choose an Option</option>
                            <option name='color' value="Red">Red</option>
                            <option name='color' value="blue">Blue</option>
                            <option name='color' value="green">Green</option>
                            <option name='color' value="yellow">Yellow</option>
                        </select>
                        </div>
                        <div id='qty'>
                            <label className='__product-form-label'>Qty:</label>
                            <button type='button' onClick={decrementValue} className='__decrement'>-</button>
                            <div id='__amount'>{amount}</div>
                            <button type='button' onClick={incrementValue} className='__increment'>+</button>
                        </div>
                        <button type='submit' id='btn' className='__btn-red'>ADD TO CART</button>
                        <div id='share'>
                            <p className='__product-form-label'>Share:</p>
                            <div className='__share-icons'>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.instagram.com"><i className="fa-brands fa-instagram"></i></a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.twitter.com"><i className="fa-brands fa-twitter"></i></a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.google.com"><i className="fa-brands fa-google"></i></a>
                                <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com"><i className="fa-brands fa-linkedin"></i></a>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        </section>
        <section className='__product-information'>
            <div className='container __product-inf-container'>
                <nav className='__product-inf-navbar container'>
                    <div className='__inf-links'>
                        <div className='__inf-link '>
                            <NavLink end to={'description'} className={({ isActive }) => (isActive ? '__inf-link-active' : '__inf-link')}>Description</NavLink>
                            <div id='__border-1' className='__inf-border'></div>
                        </div>
                        <div className='__inf-link'>
                            <NavLink end to={'additional'} className={({ isActive }) => (isActive ? '__inf-link-active' : '__inf-link')}>Additional</NavLink>
                            <div id='__border-2' className='__inf-border'></div>
                        </div>
                        <div className='__inf-link'>
                            <NavLink end to={'returns'} className={({ isActive }) => (isActive ? '__inf-link-active' : '__inf-link')}>Shopping & Returns</NavLink>
                            <div id='__border-3' className='__inf-border'></div>
                        </div>
                        <div className='__inf-link'>
                            <NavLink end to={'review'} className={({ isActive }) => (isActive ? '__inf-link-active' : '__inf-link')}>Reviews</NavLink>
                            <div id='__border-4' className='__inf-border'></div>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </section>
    </>
  )
}

export default Product