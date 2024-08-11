import { Link, useLocation } from 'react-router-dom';

function NavbarLinks() {
    const { pathname } = useLocation();

    return (
        <>
            <Link to="/" className={pathname === "/" ? "active" : ""}>About Me</Link>
            <Link to="projects/" className={pathname === "/projects/" ? "active" : ""}>Projects</Link>
        </>
    )
}

export default NavbarLinks;