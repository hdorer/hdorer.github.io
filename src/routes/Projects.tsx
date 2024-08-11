import Markdown from 'react-markdown';
import projectsContent from '../assets/content/Encounter System Article.md?raw';
import './page.css';

function Projects() {
    return (
        <div className="page-container">
            <div className="content-container">
                <h1 className="page-title">SYNC's Encounter System</h1>
                <div className="content-block">
                    <Markdown className="content-text">{projectsContent}</Markdown>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/gpjXHFgNoHk?si=CgkM1-BCLZ0tpkCu"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen />
                </div>
            </div>
        </div>
    );
}

export default Projects;