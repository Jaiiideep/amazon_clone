import './Header.css';
import React from 'react';
import header_logo from './images/header_logo.png';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        // CONTAINER: Header
        <div className='header'>
            {/* SECTION 01: Header Start */}
            <div className='header__start'>
                {/* Header Logo */}
                <img
                className='header__logo'
                src={header_logo} />
            </div>

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
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>

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
            </div>
        </div>
    )
}

export default Header
