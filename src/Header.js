import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentitaton = () => {
    if (user) {
      auth.signOut();
    }
  } 

  return (
    <div className='header'>
      <div>
        <Link to="/">
          <div>
            <span className="header__logo">fashionBox</span> 
          </div>
        </Link>
      </div>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__searchIcon' />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentitaton} className="header__option">
            <span className="header__optionLineOne">Hello Guest</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span> 
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& orders</span> 
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span> 
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon  />
            <span className="header__basketCount header__optionLineTwo" >{basket?.length} 
            </span>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Header