import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>The lean startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>

            </p>

        <div className='product__rating'>
            <p>⭐</p>
            <p>⭐</p>
            <p>⭐</p>
            <img
            src='https://kopithoughts.com/wp-content/uploads/2020/09/TheLeanStartup_side-800x800.jpeg'
            alt=''
            />
            <button>Add to Basket</button>


        </div>

        </div>
    </div>
  )
}

export default Product