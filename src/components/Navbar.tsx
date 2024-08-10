import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const { pathname } = useLocation();

    return(
        <header>
            <div className="topnav">
                <Link to="/" className={pathname === "/" ? "active" : ""}>About Me</Link>
                <Link to="projects/" className={pathname === "/projects/" ? "active" : ""}>Projects</Link>
            </div>
        </header>
    );
}

export default Navbar;