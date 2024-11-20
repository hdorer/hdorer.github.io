import { Link, useLocation } from 'react-router-dom';

type OnClickCallback = () => void;

interface Props {
    onClick?: OnClickCallback;
}

function NavbarLinks({ onClick }: Props) {
    const { pathname } = useLocation();

    // Temporary until About Me page is finished
    if(import.meta.env.DEV) {
        return (
            <>
                <Link to="/test-page/" className={pathname==="/test-page/" ? "active" : ""} onClick={onClick}>Test Page</Link>
                <Link to="/" className={pathname === "/" ? "active" : ""} onClick={onClick}>About Me</Link>
                <Link to="/projects/" className={pathname === "/projects/" ? "active" : ""} onClick={onClick}>Projects</Link>
            </>
        );
    } else {
        return <Link to="/" className={pathname === "/" ? "active" : ""} onClick={onClick}>Projects</Link>;
    }
}

export default NavbarLinks;