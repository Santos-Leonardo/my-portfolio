import React from 'react'

import styles from './projects.module.css'
import ProjectList from '../../components/projects/ProjectList'
import PhraseDot from '../../components/phrasedot/PhraseDot'

const Projects = () => {

    React.useEffect(() => {
        document.body.scrollIntoView({behavior: 'smooth'});
    }, []);

    return (
        <section className={styles.page}>
            <div className={styles.title}>
                <h1 className={`code ${styles.pageTitle}`}>Bringing visions to life<PhraseDot title={true} /></h1>
            </div>
            <ProjectList limit={100} border={true} />
        </section>
    )
}

export default Projects;
