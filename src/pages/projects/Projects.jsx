import React from 'react'

import styles from './projects.module.css'
import ProjectList from '../../components/projects/ProjectList'
import PhraseDot from '../../components/phrasedot/PhraseDot'
import PROJECTS from '../../assets/data/PROJECTS'
import { Context } from '../../context/Context'

const Projects = () => {

    const DICT = React.useContext(Context).dictionary.project;

    React.useEffect(() => {
        document.body.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <section className={styles.page}>
            <div className={styles.title}>
                <h1 className={`code ${styles.pageTitle}`}>{DICT.BRINGINGVISIONS}<PhraseDot title={true} /></h1>
                <p className={`${styles.projectNumber} code`}><strong>{PROJECTS.length}</strong> {DICT.PROJECTSLAUNCHED}.</p>
            </div>
            <ProjectList limit={100} border={true} />
        </section>
    )
}

export default Projects;
