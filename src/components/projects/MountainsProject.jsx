import Project from '../Project.jsx'
import {Mountains} from "@phosphor-icons/react";

function TravelProject() {

    return (
        <Project
            projectLink={"https://mountains.moosbrugger.io/"}
            projectName={"Mountain Ranges"}
            projectDescription={"Standing atop mountains can be really calming and grounding. This website doesn't quite come close to it, but it is still a fun thing to play around with and generate some nice mountains using Perlin noise."}
            projectDate={"2017"}
            layoutLeft={true}
            projectIcon={<Mountains weight={"duotone"} />}/>
    )
}

export default TravelProject