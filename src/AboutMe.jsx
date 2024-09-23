import './AboutMe.css'
import './components/FancyButton.css'
import Map from './components/Map.jsx'
import {LinkedinLogo, PaperPlaneTilt, ReadCvLogo} from "@phosphor-icons/react";
import {useState} from "react";

function AboutMe() {
    const [showToast, setShowToast] = useState(false);
    const [fadeToast, setFadeToast] = useState(false);

    const handleEmailClick = () => {
        navigator.clipboard.writeText("mia.moosbr@gmail.com");
        setShowToast(true);

        setTimeout(() => {
            setFadeToast(true);
            setTimeout(() => {
                setShowToast(false);
                setFadeToast(false);
            }, 800);
        }, 1200);
    };


    return (
        <div id="aboutMe">
            <div className="aboutMeDescription whiteShadowBox">
                <div className="aboutMeTitle">
                    <h1>About Me</h1>
                </div>
                <div className="aboutMeText">
                    Hi, I'm Mia Moosbrugger, a recent Master's graduate in Information Systems from TUM, fluent in both German and English, currently based in Austria but willing to relocate. I was fortunate enough to be able to study abroad in both Singapore and Iceland. My research theses have focused on the skills required by DevOps teams and the factors influencing human content moderation decision-making.

                    I'm always up for a new challenge, whether it's related to project management, development, or data science. Outside of work, I love traveling, reading, playing Dungeons and Dragons with friends, and playing badminton.

                    I'm excited to see where my journey takes me next!
                </div>
                <div className="aboutMeLinks">
                    <div className="anchorToast">
                        <a onClick={handleEmailClick} href="mailto:mia.moosbr@gmail.com" className="retroShadowButton" role="button">
                            <PaperPlaneTilt size="1.4em" alt="Tilted paper plane icon" />
                            Email
                        </a>
                        {showToast && <div className={`${fadeToast ? "toastFade" : ""} toast`}>Copied!</div>}
                    </div>
                    <a href="" className="retroShadowButton" role="button">
                        <LinkedinLogo size="1.4em" alt="LinkedIn logo" />
                        LinkedIn
                    </a>
                    <a href="" className="retroShadowButton" role="button">
                        <ReadCvLogo size="1.4em" alt="Document icon" />
                            Resume
                    </a>
                </div>
            </div>
            <div className="aboutMeMap">
                <Map/>
            </div>
        </div>
    )
}

export default AboutMe
