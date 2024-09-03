import { useState, useEffect } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import PageLayout from '../components/PageLayout';
import Footer from "../components/Footer";
import './page.css';

function Root() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resized = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', resized);

        return () => {
            window.removeEventListener('resize', resized);
        }
    }, []);

    return (
        <>
            {width >= 768 ? <Navbar /> : <MobileNavbar />}
            <PageLayout>
                <Outlet />
            </PageLayout>
            <Footer />
        </>
    );
}

export default Root;