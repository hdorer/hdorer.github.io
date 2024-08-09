import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className="content-text">
            <p>Here's another wacky webpage!</p>
            <Link to="/">link to other page</Link>
        </div>
    );
}

export default Projects;