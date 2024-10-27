import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import Card from '../components/Card';
import projectsContent from '../assets/articles/Encounter System Article.md?raw';
import syncCapsule from '../assets/images/sync-capsule.png';
import './page.css';

function Projects() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <>
            <Card title='SYNC' thumbnail={syncCapsule} linkTo="sync">
                My Champlain College capstone project, SYNC, is a first-person shooter that lets you hack into your enemies and take control of them,
                using their abilities and weapons for your benefit.  Learn more about SYNC and the work that I did for the project here!
            </Card>
        </>
    );
}

export default Projects;