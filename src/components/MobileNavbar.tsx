import { useState } from 'react';
import NavbarLinks from './NavbarLinks';
import hamburgerIcon from '../assets/hamburger-icon.png';
import closeIcon from '../assets/close-icon.png';
import './MobileNavbar.css';

function MobileNavbar() {
    const [opened, setOpened] = useState(false);

    const toggleOpened = () => setOpened(!opened);

    return (
        <header>
            <div className="mobile-nav">
                <div className={ opened ? "mobile-nav-links opened" : "mobile-nav-links"}>
                    <NavbarLinks />
                </div>
                <div className="mobile-nav-menu-icon">
                    <a onClick={toggleOpened}>
                        <img src={opened ? closeIcon : hamburgerIcon} />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default MobileNavbar;