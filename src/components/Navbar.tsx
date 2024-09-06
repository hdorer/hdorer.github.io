import NavbarLinks from './NavbarLinks';
import './Navbar.css';

function Navbar() {
    return(
        <header className="nav-parent">
            <div className="nav">
                <NavbarLinks />
            </div>
        </header>
    );
}

export default Navbar;