import Markdown from 'react-markdown';
import aboutMeContent from '../assets/content/About Me.md?raw';
import './page.css';

function AboutMe() {    
    return (
        <div className="page-container">
            <div className="content-container">
                <h1 className="page-itle">Hi!  I'm Harry Dorer.</h1>
                <div className="content-block">
                    <Markdown className="content-text">{aboutMeContent}</Markdown>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;