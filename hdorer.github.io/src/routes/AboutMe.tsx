import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

function AboutMe() {
    return (
        <div className="content-text">
            <p>Oh man this sure is a webpage</p>
            <Link to="projects/">link to other page</Link>
            <Footer />
        </div>
    );
}

export default AboutMe;