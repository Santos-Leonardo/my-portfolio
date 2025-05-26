import React from 'react'

import styles from './projectList.module.css'
import ProjectItem from './projectitem/ProjectItem';
import { Context } from '../../context/Context';

const ProjectList = ({ limit, border = false }) => {

    const projectsList = React.useContext(Context).PROJECTS;

    React.useEffect(() => {
        document.body.scrollIntoView({behavior: 'smooth'});
    });
    
    return (
        <ul className={styles.projects}>
            {projectsList.map((project, i) => {                
                if (limit > i) return <ProjectItem key={project.name} project={project} border={border} />
            })}
        </ul>
    )
}

export default ProjectList;
