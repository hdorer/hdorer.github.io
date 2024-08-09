import { Link } from 'react-router-dom';

function AboutMe() {
    return (
        <div className="content-text">
            <p>Oh man this sure is a webpage</p>
            <Link to="projects/">link to other page</Link>
        </div>
    );
}

export default AboutMe;