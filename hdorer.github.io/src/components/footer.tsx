import githubIcon from '../assets/github-logo.png';
import itchioIcon from '../assets/itch-io-icon.png';
import linkedinIcon from '../assets/linkedin-logo.png';
import emailIcon from '../assets/email-icon.png'
import './footer.css'


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <a href="https://github.con/hdorer" className="footer-link">
                    <img src={githubIcon} alt="Look at my repositories on GitHub"></img>
                </a>
                <a href="https://hdorer.itch.io/" className="footer-link">
                    <img src={itchioIcon} alt="Play my games on itch.io"></img>
                </a>
                <a href="https://www.linkedin.com/in/harrydorer" className="footer-link">
                    <img src={linkedinIcon} alt="Connect with me on LinkedIn"></img>
                </a>
                <a href="mailto:hdorer24@gmail.com" className="footer-link">
                    <img src={emailIcon} alt="Email me"></img>
                </a>
            </div>
        </footer>
    );
}

export default Footer;