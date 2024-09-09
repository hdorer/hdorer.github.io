import { useContext } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import PageLayout from '../components/PageLayout';
import Footer from "../components/Footer";
import globalContext from '../components/GlobalContext';
import './page.css';

function Root() {
    const context = useContext(globalContext);
    if(!context) {
        throw new Error("Missing context (is the component you're trying to use this in inside a GlobalContextProvider?)");
    }

    const { screenWidth } = context;

    return (
        <>
            {screenWidth >= 768 ? <Navbar /> : <MobileNavbar />}
            <PageLayout>
                <Outlet />
            </PageLayout>
            <Footer />
        </>
    );
}

export default Root;