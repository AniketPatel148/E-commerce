import React from 'react'
import './Product.css'

function Product({title, pricing, rating, image}) {
    return (
        <div className='product'>
            <div className="product__info">
                <p> {title}</p>
                <div className="product__pricing">
                    <small>$</small>
                    <strong>{pricing}</strong>
                </div>
                <div className="product__rating">
                    {Array(rating).fill().map((_, i) => <p>🌟</p>)}  
                </div>
            </div>
            <img src={image} alt="" />
            <button>Add to basket!</button>
            
        </div>
    )
}

export default Product
