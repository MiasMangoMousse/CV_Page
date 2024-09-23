import Project from '../Project.jsx'
import {UserCircleDashed } from "@phosphor-icons/react";

function ResumeProject() {

    return (
        <Project
            projectLink={"http://localhost:5173/"}
            codeLink={"https://cv.moosbrugger.io"}
            projectName={"CV Page"}
            projectDescription={"This website. A little meta."}
            projectDate={"2024"}
            layoutLeft={false}
            projectIcon={<UserCircleDashed  weight={"duotone"}/>}/>
    )
}

export default ResumeProject