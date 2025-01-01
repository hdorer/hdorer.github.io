import Card from '../components/Card';
import Markdown from 'react-markdown';
import syncCapsule from '../assets/images/sync-capsule.png';
import exaptationImage from '../assets/images/exaptation_image.png';
import './page.css';
import './Projects.css';

function Projects() {
    return (
        <>
            <Card title='Portfolio Site' linkTo='/'>
                This very website was built from the ground up using React!  It's the first website I've ever built from scratch in this way.  Although it's quite
                simple, it's been a valuable learning experience!  If you want to see under the hood, the source code is publicly available on my GitHub page!
            </Card>
            <Card title='SYNC' thumbnail={syncCapsule} linkTo="sync">
                <Markdown>
                    My Champlain College capstone project, *SYNC*, is a first-person shooter that lets you hack into your enemies and take control of them, using
                    their abilities and weapons for your benefit.
                </Markdown>
            </Card>
            <Card title='Puttapalooza' linkTo="https://hdorer.itch.io/puttapalooza">
                <Markdown>
                    I have no idea what to put here
                </Markdown>
            </Card>
            <Card title='Totally Epic Quests'>
                <Markdown>
                    I have no idea what to put here
                </Markdown>
            </Card>
            <Card title='Exaptation' thumbnail={exaptationImage} linkTo='https://hdorer.itch.io/exaptation'>
                <Markdown>
                    I have no idea what to put here
                </Markdown>
            </Card>
            <Card title='No Free Refuels' linkTo="https://hdorer.itch.io/no-free-refuels">
                <Markdown>
                    My favorite solo project to date!  Created in 7 days for the Amaze Me Game Jam in 2021, No Free Refuels is a fast-paced twin stick shooter that
                    makes you think fast and use the right weapon against each swarm of enemies that chases you down.
                </Markdown>
            </Card>
        </>
    );
}

export default Projects;