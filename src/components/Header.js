import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'
import { useStateValue } from '../StateProvider';
import logo from '../images/dog_logo (1).png'


function Header() {

    const [{ basket }] = useStateValue();

    return (
        <nav className='header'>
            {/* amazon logo */}
            <Link to='/'>
                <img className='header__logo' src={logo} alt='amazon logo' />
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
                        <ShoppingCartIcon />
                        {/* shopping basket icon */}
                        <span className='header__optionLineTwo header__basketCount'>
                            {basket.length}
                        </span>
                    </div>
                </Link>

            </div>

        </nav>
    )
}

export default Header