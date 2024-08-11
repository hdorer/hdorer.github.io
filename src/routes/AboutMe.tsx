import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import './page.css';

function AboutMe() {    
    const [aboutMeText, setAboutMeText] = useState('');

    useEffect(() => {
        const markdownFiles = import.meta.glob('../assets/content/About Me.md', { as: 'raw' });

        const loadMarkdown = async () => {
            const file = markdownFiles['../assets/content/About Me.md'];
            const content = await file();
            console.log(content);
            setAboutMeText(content);
        };

        loadMarkdown();
    }, []);

    return (
        <div className="page-container">
            <div className="content-container">
                <h1 className="page-itle">Hi!  I'm Harry Dorer.</h1>
                <div className="content-block">
                    <Markdown className="content-text">{aboutMeText}</Markdown>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;