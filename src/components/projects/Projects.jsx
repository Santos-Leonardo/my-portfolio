import React from 'react'

import styles from './projects.module.css'
import ProjectItem from './projectitem/ProjectItem';
import { Context } from '../../context/Context';

const Projects = ({ limit }) => {

    const projectsList = React.useContext(Context).PROJECTS;
    
    return (
        <ul className={styles.projects}>
            {projectsList.map((project, i) => {                
                if (limit > i) return <ProjectItem key={project.name} project={project} />
            })}
        </ul>
    )
}

export default Projects;
