import './Header.css';
import React from 'react';
import header_logo from './images/header_logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    };

    return (
        // CONTAINER: Header
        <div className='header'>
            <Link to="/">
                {/* SECTION 01: Header Start */}
                <div className='header__start'>
                    {/* Header Logo */}
                    <img
                        className='header__logo'
                        src={header_logo}
                        alt="Header Logo" />
                </div>
            </Link>

            {/* SECTION 02: Header Search */}
            <div className="header__search">
                {/* Search Bar */}
                <input
                    className="header__searchInput"
                    type="text" />
                {/* Search Icon */}
                <SearchIcon className="header__searchIcon" />
            </div>

            {/* SECTION 03: Header Navigation */}
            <div className="header__navigation">
                {/* Option 01 */}
                <Link to={ !user && '/login'}>
                    <div
                        className="header__option"
                        onClick={handleAuthentication}>
                        <span className="header__optionLineOne">
                            {user ? user.email : 'Hello, Guest'}
                        </span>
                        <span className="header__optionLineTwo">
                            { user ? 'Sign Out' : 'Sign In'}
                        </span>
                    </div>
                </Link>

                {/* Option 02 */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Returns
                    </span>
                    <span className="header__optionLineTwo">
                        & Orders
                    </span>
                </div>

                {/* Option 03 */}
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>

                {/* Option 04 */}
                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basketCount">
                            {basket.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
