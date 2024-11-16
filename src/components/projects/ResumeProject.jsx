import Project from '../Project.jsx'
import {UserCircleDashed } from "@phosphor-icons/react";

function ResumeProject() {

    return (
        <Project
            projectLink={"https://moosbrugger.io"}
            codeLink={"https://github.com/MiasMangoMousse/CV_Page"}
            projectName={"CV Page"}
            projectDescription={"This website. A little meta."}
            projectDate={"2024"}
            layoutLeft={false}
            projectIcon={<UserCircleDashed  weight={"duotone"}/>}/>
    )
}

export default ResumeProject