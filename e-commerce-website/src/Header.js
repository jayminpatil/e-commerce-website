import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function Header() {
  return (
    <div className='header'> 
        <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />   

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <SearchIcon className="header__searchIcon" />
            <MicIcon className="header__micIcon" />
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