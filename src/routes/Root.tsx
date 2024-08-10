import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import MobileNavbar from '../components/MobileNavbar';
import Footer from "../components/Footer";

function Root() {
    return (
        <>
            <MobileNavbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;