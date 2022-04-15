import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'> 
        <img
            className="Header_logo"
            src="images.png"
        />   

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            {/* Logo */}

        </div>

        <div className="header__nav">
            <div className='header__option'>
                <span className='header__optionLineOne'>Hello Pal</span>
                <span className='header__optionLineOne'>Sign In</span>
            
            </div>

            <div className="header__option">
                <span className='header__optionLineOne'>Orders</span>
                <span className='header__optionLineOne'>& Returns</span>
            
            </div>

            <div className="header__option">
                <span className='header__optionLineOne'>Your</span>
                <span className='header__optionLineOne'>Prime</span>
            
            </div>
        </div>
    </div>
  )
}

export default Header