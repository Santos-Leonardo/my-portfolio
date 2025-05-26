import React from 'react'

import styles from './projects.module.css'
import ProjectList from '../../components/projects/ProjectList'

const Projects = () => {

    return (
        <section className={styles.page}>
            <h1 className={styles.pageTitle}>Bringing visions to life</h1>
            <ProjectList limit={10} />

        </section>
    )
}

export default Projects;
