import './Header.css';
import React from 'react';
import header_logo from './images/header_logo.png';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <div className='header'>
            {/* Header Logo on the left */}
            <img
                className='header__logo'
                src={header_logo} />
            {/* Header Searchbar in the middle */}
            <div className="header__search">
                <input
                    className="header__searchInput"
                    type="text" />
                {/* Searchbar logo on the right of searchbar */}
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* Header navigation on the right */}
            <div className="header__nav">
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
