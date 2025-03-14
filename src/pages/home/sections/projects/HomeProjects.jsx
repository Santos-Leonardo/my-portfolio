import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './homeprojects.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import { Context } from '../../../../context/Context'
import Projects from '../../../../components/projects/Projects';
import Button from '../../../../components/button/Button';

const HomeProjects = () => {

    const DICT = React.useContext(Context).dictionary.homeProjects;
    const numberOfProjects = React.useContext(Context).PROJECTS.length;

    const navigate = useNavigate();

    return (
        <section className={styles.projectsSection}>
            <SectionHeader title={DICT.PROJECTS} />
            {/* Projects List */}
            <div className={`container ${styles.list}`}>
                <Projects limit={(window.innerWidth > 700) ? 6 : 4} />
            </div>
            <Button text={`${DICT.VIEWALL} (${numberOfProjects})`} onClick={() => { navigate('projects')} } />
        </section>
    )
}

export default HomeProjects;
