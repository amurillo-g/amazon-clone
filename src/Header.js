import React from 'react'
import './Header.css';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo' src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      <div className="header__search">
        <input type="text" className="header__search" />
        {/* LOGO*/}
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__OptionLineOne">Hello Guest</span>
          <span className="header_OptionLineTwo">Sign In</span> 
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Returns</span>
          <span className="header_OptionLineTwo">& orders</span> 
        </div>
        <div className="header__option">
          <span className="header__OptionLineOne">Your</span>
          <span className="header_OptionLineTwo">Prime</span> 
        </div>
      </div>
    </div>
  )
}

export default Header