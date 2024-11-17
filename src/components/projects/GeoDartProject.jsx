import Project from '../Project.jsx'
import {Target} from "@phosphor-icons/react";

function GeoDartProject() {

    return (
        <Project
            projectLink={"https://geodart.moosbrugger.io/"}
            projectName={"Geo Dart"}
            projectDescription={"A web-based game where players select the location of European capitals on a map, earning points based on accuracy. Developed as an upgrade to an old PowerPoint with a similar game for my granddad. Using React and Mapbox"}
            projectDate={"2019"}
            layoutLeft={true}
            projectIcon={<Target weight={"duotone"}/>}/>
    )
}

export default GeoDartProject