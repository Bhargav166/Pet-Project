import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import './Header.css'

function Header() {
    return (
        <nav className='header'>
            {/* amazon logo */}
            <Link to='/'>
                <img className='header__logo' src='https://img.freepik.com/premium-vector/simplicity-little-dog-logo-black-background_100659-184.jpg' alt='amazon logo' />
            </Link>

            {/* search box */}
            <div className='header__search'>
                <input type="text" className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            {/* 3 links */}
            <div className='header__nav'>

                {/* 1st link */}
                <Link to='/login' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Hello User</span>
                        <span className='header__optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/' className='header__link'>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/checkout' className='header__link'>
                    <div className='header__optionBasket'>
                        <ShoppingBasketIcon />
                        {/* shopping basket icon */}
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header