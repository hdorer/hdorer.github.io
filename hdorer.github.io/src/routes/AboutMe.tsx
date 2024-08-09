import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

function AboutMe() {
    return (
        <>
            <p>Oh man this sure is a webpage</p>
            <Link to="projects/">link to other page</Link>
            <Footer />
        </>
    );
}

export default AboutMe;