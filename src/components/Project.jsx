/* eslint-disable no-self-assign */
// noinspection SillyAssignmentJS

import './Project.css'
import PropTypes from 'prop-types';
import {useEffect, useRef, useState} from 'react';
import { CornersOut, ArrowsInSimple, ArrowsOutSimple, ArrowClockwise, GithubLogo, Lock, X } from "@phosphor-icons/react";

const Project = ({ projectLink, codeLink, projectName, projectDescription, projectDate, layoutLeft, projectIcon }) => {
    const projectRef = useRef(null);
    const projectWindowRef = useRef(null);
    const projectWindowBarRef = useRef(null);
    const projectDescriptionRef = useRef(null);
    const [projectClosed, setProjectClosed] = useState(false);
    const [projectMinimized, setProjectMinimized] = useState(false);
    const [isRecursiveLoad, setIsRecursiveLoad] = useState(false);

    const reloadProject = () => {
        if(!isRecursiveLoad){
            projectWindowRef.current.src = projectWindowRef.current.src;
        }
    };

    const closeProject = () => {
        setProjectClosed(true);
    };

    const openProject = () => {
        setProjectClosed(false);
        setProjectMinimized(false);
    };

    const addWindowTransitions = (minimize) => {
        if(minimize){
            projectDescriptionRef.current.style.transition = 'max-height 0.7s ease, padding-top 0.7s ease, padding-bottom 0.7s ease';
        } else {
            projectDescriptionRef.current.style.transition = 'max-height 0.6s ease-out 0.1s, padding-top 0.6s ease-out 0.1s, padding-bottom 0.6s ease-out 0.1s';
        }
        projectRef.current.style.transition = 'height 0.7s ease';
        projectWindowBarRef.current.style.transition = 'border-bottom-width 0.3s ease';
    };

    const removeWindowTransitions = () => {
        projectDescriptionRef.current.style.transition = '';
        projectRef.current.style.transition = '';
        projectWindowBarRef.current.style.transition = '';
    };

    const handleMinimizeClick = () => {
        const onTransitionEnd = ({ propertyName }) => {
            if (propertyName === 'height') {
                removeWindowTransitions();
                projectRef.current.removeEventListener('transitionend', onTransitionEnd);
            }
        };
        projectRef.current.addEventListener('transitionend', onTransitionEnd);
        addWindowTransitions(true);
        setProjectMinimized(!projectMinimized);
    };

    useEffect(() => {
        const isIframe = window !== window.top;
        if (isIframe && projectLink === window.location.href) {
            setIsRecursiveLoad(true);
        }
    }, [projectLink]);

    return (
        <div className="projectContainer">
            {!projectClosed && (
                <div ref={projectRef} id={"project"} className={`${layoutLeft ? "projectLayoutLeft" : "projectLayoutRight"} ${projectMinimized ? "projectMinimized" : ""}`}>
                    <div className="projectWindow whiteShadowFilter">
                        <div ref={projectWindowBarRef} className="projectWindowBar">
                            <div className="projectWindowButtonsFront">
                                <ArrowClockwise onClick={reloadProject} alt="Reload window" className="projectWindowButtonPhosphor" />
                            </div>
                            <div className="projectWindowBarContent">
                                <Lock color="#95b957" className="projectWindowBarLock" alt="HTTPS" />
                                <a href={projectLink} target="_blank">{projectLink}</a>
                            </div>
                            <div className="projectWindowButtonsBack">
                                {projectMinimized ? (
                                    <ArrowsOutSimple className="projectWindowButtonPhosphor" onClick={handleMinimizeClick} alt="Minimize window" />
                                ) : (
                                    <ArrowsInSimple className="projectWindowButtonPhosphor" onClick={handleMinimizeClick} alt="Minimize window" />
                                )}
                                <a className="projectWindowButtonPhosphor" href={projectLink} target="_blank">
                                    <CornersOut className="projectWindowButtonPhosphor" alt="Fullscreen" />
                                </a>
                                <X className="projectWindowButtonPhosphor" onClick={closeProject} src={X} alt="Close window" />
                            </div>
                        </div>
                        <div className="projectWindowContent">
                            {isRecursiveLoad ? (
                                <div className={"projectAlt"}>
                                    Too meta!
                                </div>
                            ) : (
                                <iframe ref={projectWindowRef} src={projectLink} title={projectName} />
                            )}
                        </div>
                    </div>
                    <div ref={projectDescriptionRef} className="projectDescription">
                        <div className="descriptionText">
                            <h1>{projectName}</h1>
                            {isRecursiveLoad ? (
                                "This website again. Very meta."
                            ) : (
                                projectDescription
                            )}
                        </div>
                        <div className="projectDate projectTags">
                            <div className="descriptionDate projectTag">
                                <span>
                                    {projectDate}
                                </span>
                            </div>
                            {codeLink && (
                                <div className="descriptionCodeLink projectTag">
                                    <a href={codeLink}>
                                        <GithubLogo color="black" className="projectTagIcon" />
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            {projectClosed && (
                <div className="projectShortcut whiteShadowFilter">
                    <div onClick={openProject} className="projectIcon">
                        {projectIcon}
                    </div>
                    <h3 onClick={openProject} >{projectName}</h3>
                </div>
            )}
        </div>
    )
}

Project.propTypes = {
    projectLink: PropTypes.string.isRequired,
    codeLink: PropTypes.string,
    projectName: PropTypes.string.isRequired,
    projectDescription: PropTypes.string.isRequired,
    projectDate: PropTypes.string.isRequired,
    layoutLeft: PropTypes.bool.isRequired,
    projectIcon: PropTypes.object.isRequired
};

export default Project