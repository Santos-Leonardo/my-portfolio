import React from 'react'

import styles from './projects.module.css'
import ProjectItem from './projectitem/ProjectItem';
import PROJECTS from '../../assets/data/projects';

const Projects = ({ limit }) => {

    return (
        <ul className={styles.projects}>
            {PROJECTS.map((project, i) => {                
                if (limit > i) return <ProjectItem key={project.name} project={project} />
            })}
        </ul>
    )
}

export default Projects;
