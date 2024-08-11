import Markdown from 'react-markdown';
import aboutMeContent from '../assets/content/About Me.md?raw';
import portraitImage from '../assets/portrait.jpg';
import './page.css';

function AboutMe() {    
    return (
        <div className="page-container">
            <div className="content-container">
                <h1 className="page-title">Hi!  I'm Harry Dorer.</h1>
                <div className="content-block">
                    <Markdown className="content-text">{aboutMeContent}</Markdown>
                    <div className="content-image-container">
                        <img className="content-image" src={portraitImage} alt="A picture of me looking very professional." title="A picture of me looking very professional." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;