import githubIcon from '../assets/images/github-logo.png';
import itchioIcon from '../assets/images/itch-io-icon.png';
import linkedinIcon from '../assets/images/linkedin-logo.png';
import emailIcon from '../assets/images/email-icon.png'
import './Footer.css';


function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <a href="https://github.con/hdorer" className="footer-link">
                    <img src={githubIcon} alt="Look at my repositories on GitHub" />
                </a>
                <a href="https://hdorer.itch.io/" className="footer-link">
                    <img src={itchioIcon} alt="Play my games on itch.io" />
                </a>
                <a href="https://www.linkedin.com/in/harrydorer" className="footer-link">
                    <img src={linkedinIcon} alt="Connect with me on LinkedIn" />
                </a>
                <a href="mailto:hdorer24@gmail.com" className="footer-link">
                    <img src={emailIcon} alt="Email me" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;