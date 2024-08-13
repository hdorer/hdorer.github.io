import { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import hamburgerIcon from '../assets/hamburger-icon.png';
import closeIcon from '../assets/close-icon.png';
import './MobileNavbar.css';

function MobileNavbar() {
    const [opened, setOpened] = useState(false);

    return (
        <header>
            <div className="mobile-nav">
                <div className={ opened ? "mobile-nav-links opened" : "mobile-nav-links" }>
                    <NavbarLinks onClick={ () => setOpened(false) } />
                </div>
                <div className="mobile-nav-menu-icon">
                    <a onClick={ () => setOpened(!opened) }>
                        <img src={ opened ? closeIcon : hamburgerIcon } />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default MobileNavbar;