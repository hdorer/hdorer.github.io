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
                This very website was built from the ground up using React!  It's the first website I've ever built from scratch in this way.  Although it's quite simple, it's
                been a valuable learning experience!  Want to see under the hood?  <a href="https://github.com/hdorer/hdorer.github.io" onClick={() => event?.stopPropagation()}>The source code is available on GitHub!</a>
            </Card>
            <Card title='SYNC' thumbnail={syncCapsule} linkTo="sync">
                <Markdown>
                    My Champlain College capstone project, *SYNC*, is a first-person shooter that lets you hack into your enemies and take control of them, using their abilities
                    and weapons for your benefit.  Learn more about *SYNC* and the work that I did for the project here!
                </Markdown>
            </Card>
            <Card title='Puttapalooza' linkTo="https://hdorer.itch.io/puttapalooza">
                
            </Card>
            <Card title='Exaptation' thumbnail={exaptationImage} linkTo='https://hdorer.itch.io/exaptation'>

            </Card>
            <Card title='No Free Refuels' linkTo="https://hdorer.itch.io/no-free-refuels">
                <Markdown>
                    My favorite solo project to date!  Created in 7 days for the Amaze Me Game Jam in 2021, No Free Refuels is a fast-paced twin stick shooter that makes you think
                    fast and use the right weapon against each swarm of enemies that chases you down.
                </Markdown>
            </Card>
        </>
    );
}

export default Projects;