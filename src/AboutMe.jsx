import './AboutMe.css'
import './components/FancyButton.css'
import Map from './components/Map.jsx'
import {LinkedinLogo, PaperPlaneTilt} from "@phosphor-icons/react";
import {useState} from "react";

function AboutMe() {
    const [showToast, setShowToast] = useState(false);
    const [fadeToast, setFadeToast] = useState(false);

    const handleEmailClick = async () => {
        try {
            await navigator.clipboard.writeText("email@example.com");
            setShowToast(true);

            setTimeout(() => {
                setFadeToast(true);
                setTimeout(() => {
                    setShowToast(false);
                    setFadeToast(false);
                }, 800);
            }, 1200);
        } catch (error) {
            console.error("Failed to copy email to clipboard: ", error);
        }
    };

    return (
        <div id="aboutMe">
            <div className="aboutMeDescription whiteShadowBox">
                <div className="aboutMeTitle">
                    <h1>About Me</h1>
                </div>
                <div className="aboutMeText">
                    Hi, I&apos;m <span className="aboutMeTextBold"> Mia Moosbrugger</span>, a recent Master&apos;s graduate
                    in
                    <span className="aboutMeTextBold"> Information Systems </span>from TUM, fluent in both German and
                    English, currently based in Austria but willing to relocate.
                    <br/>
                    I was fortunate enough to be able to study abroad in both Singapore and Iceland. My research
                    theses have focused on the skills required by DevOps teams and
                    the factors influencing human
                    content moderation decision-making.
                    <br/>
                    I&apos;m always up for a new challenge, whether it&apos;s related to project management,
                    development, or data science. Outside of work, I love traveling, reading, playing Dungeons and
                    Dragons with friends, and playing badminton.
                    <br/>
                    <br/>
                    <span className="aboutMeTextBold">I&apos;m excited to see where my journey takes me next!</span>
                </div>

                <div className="aboutMeLinks">
                    <div className="anchorToast">
                        <a onClick={handleEmailClick} href="mailto:mia.moosbr@gmail.com" className="retroShadowButton"
                           role="button">
                            <PaperPlaneTilt size="1.4em" alt="Tilted paper plane icon"/>
                            Email
                        </a>
                        {showToast && <div className={`${fadeToast ? "toastFade" : ""} toast`}>Copied!</div>}
                    </div>
                    <a href="https://www.linkedin.com/in/mia-m-32567a100/" className="retroShadowButton" role="button">
                        <LinkedinLogo size="1.4em" alt="LinkedIn logo"/>
                        LinkedIn
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
