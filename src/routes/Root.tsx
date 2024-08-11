import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from "../components/Footer";

function Root() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            {width >= 768 ? <Navbar /> : <MobileNavbar />}
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;