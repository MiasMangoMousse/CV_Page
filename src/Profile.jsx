import './Profile.css'
import ProfilePhoto from './assets/round-photo-1024.webp';
import PropTypes from "prop-types";
import { HandWaving, GraduationCap, BookOpenText, MagnifyingGlass } from "@phosphor-icons/react";
import {useLayoutEffect, useState} from "react";

function Profile({backgroundSize}) {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

  return (
      <div id="profile">
          <div className="nameAndPicture whiteShadowFilter">
              <div className="profileText" style={{gap: backgroundSize/4*2+'px'}}>
                  <div className={"profileTextLarge"} style={{fontSize: 'clamp(2rem, '+backgroundSize * 2+'px, 14vw)', lineHeight: 3*backgroundSize+'px', paddingTop: backgroundSize/1.8+(25*(backgroundSize-(size[1]/25)))+'px'}}>
                      <span>Hi, I'm Mia!</span>
                      <HandWaving weight="duotone" />
                  </div>
                  <div className="profileTextSmall" style={{
                      fontSize: 'clamp(1rem, ' + backgroundSize * 0.8 + 'px, 6vw)',
                      lineHeight: 1 * backgroundSize + 'px'}}>
                      <div>
                          <span>Recent TUM graduate </span>
                          <GraduationCap weight="duotone" />
                      </div>
                      <div>
                          <span>Information Systems Master </span>
                          <BookOpenText weight="duotone" />
                      </div>
                      <div>
                          <span>Looking for work! </span>
                          <MagnifyingGlass weight="duotone" />
                      </div>
                  </div>
              </div>
              <div className="profilePhoto">
                  <img src={ProfilePhoto} alt="Profile Photo" />
              </div>
          </div>
      </div>
  )
}

Profile.propTypes = {
    backgroundSize: PropTypes.number.isRequired
}

export default Profile
