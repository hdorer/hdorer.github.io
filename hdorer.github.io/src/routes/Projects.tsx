import { Link } from 'react-router-dom';
import Footer from "../components/Footer";

function Projects() {
    return (
        <>
            <p>Here's another wacky webpage!</p>
            <Link to="/">link to other page</Link>
            <Footer />
        </>
    );
}

export default Projects;