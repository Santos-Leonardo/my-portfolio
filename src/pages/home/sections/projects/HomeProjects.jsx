import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './homeprojects.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import { Context } from '../../../../context/Context'
import ProjectList from '../../../../components/projects/ProjectList';
import Button from '../../../../components/button/Button';

const HomeProjects = () => {

    const DICT = React.useContext(Context).dictionary.homeProjects;
    const numberOfProjects = React.useContext(Context).PROJECTS.length;

    const navigate = useNavigate();

    return (
        <section className={styles.projectsSection}>
            <SectionHeader title={DICT.PROJECTS} />
            {/* Projects List */}
            <div className={`${styles.list}`}>
                <ProjectList limit={(window.innerWidth > 700) ? 4 : 3} />
            </div>
            <Button text={`${DICT.VIEWALL} (${numberOfProjects})`} onClick={() => { navigate('projects')} } />
        </section>
    )
}

export default HomeProjects;
