import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client'
import Profile from './Profile.jsx'
import AboutMe from './AboutMe.jsx'
import TravelProject from './components/projects/TravelProject.jsx'
import './main.css'
import MenuBar from "./components/MenuBar.jsx";
import GeoDartProject from "./components/projects/GeoDartProject.jsx";
import MountainsProject from "./components/projects/MountainsProject.jsx";
import ResumeProject from "./components/projects/ResumeProject.jsx";


function Main() {
    const [backgroundSize, setBackgroundSize] = useState(Math.round(window.innerHeight / 25));
    const [menuHeight, setMenuHeight] = useState(Math.round(window.innerHeight / 25) - 1);
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setBackgroundSize(Math.round(window.innerHeight / 25));
            setMenuHeight(Math.round(window.innerHeight / 25) - 1);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    window.addEventListener("scroll", getScrollPercent);
    function getScrollPercent() {
        setScrollPercent(window.scrollY / document.body.scrollHeight);
    }

    window.addEventListener("resize", function(){
        let yPos = document.body.scrollHeight * scrollPercent;
        window.scrollTo(0, yPos);
    });

    return (
        <div className="background" style={{ backgroundSize: backgroundSize*4 }}>
            <div className="notBackground">
                <MenuBar height={menuHeight}/>
                <Profile backgroundSize = {backgroundSize} />
                <AboutMe />
                <GeoDartProject />
                <TravelProject />
                <MountainsProject />
                <ResumeProject />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
)
