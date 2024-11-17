import Project from '../Project.jsx'
import {Compass} from "@phosphor-icons/react";

function TravelProject() {

    return (
        <Project
            projectLink={"https://travels.moosbrugger.io"}
            projectName={"Travels"}
            projectDescription={"Created as a way to easily share pictures from a few of the places I've been fortunate enough to have been able to travel to."}
            projectDate={"2018"}
            layoutLeft={false}
            projectIcon={<Compass weight={"duotone"}/>}/>
    )
}

export default TravelProject