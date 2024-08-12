import syncCapsuleImage from '../assets/sync-capsule.png';
import portraitImage from '../assets/portrait.jpg';
import './page.css';

function AboutMe() {    
    return (
        <div className="page-container">
            <div className="content-container">
                <h1 className="page-title">Hi!  I'm Harry Dorer.</h1>
                <div className="content-block">
                    <div className="content-text">
                        <p>I am a senior Game Programming major at Champlain College, graduating in 2024. I am skilled at creating engaging gameplay systems, an eager learner, and built my experience with collaborative projects and game jams.</p>
                        <h1>Latest Project</h1>
                        <a href="https://store.steampowered.com/app/2820790/SYNC/">
                            <img src={syncCapsuleImage} alt="SYNC Steam Page" title="Available for free on Steam!" />
                        </a>
                        <p>
                            During my senior year, I worked on a large team to develop SYNC, a first-person shooter with fast-paced gameplay that makes you think on your feet. You play as an AI construct on a mission to stop the rogue AI SynTell
                            from taking over the facility built by your creators, Unillect. Using your SYNC ability, you can take over the systems of any enemy in your path, using their advanced firepower to your advantage. SYNC is available now on
                            Steam!
                        </p>
                        <h1>More Links</h1>
                        <p>
                            I have a few more games available on <a href="https://hdorer.itch.io/">my itch.io page</a>.
                        </p>
                        <p>
                            You can also view code I have written directly in the public repositories on <a href="https://github.com/hdorer">my GitHub page</a>.
                        </p>
                        <p>
                            If you want to get in touch, you can <a href="https://www.linkedin.com/in/harrydorer">connect with me on LinkedIn</a> or <a href="mailto:hdorer24@gmail.com">email me</a>!
                        </p>
                    </div>
                    <div className="content-image-container">
                        <img className="content-image" src={portraitImage} alt="A picture of me looking very professional." title="A picture of me looking very professional." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;