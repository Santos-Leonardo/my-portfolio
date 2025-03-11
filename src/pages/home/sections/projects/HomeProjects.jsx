import React from 'react'

import styles from './homeprojects.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import { Context } from '../../../../context/Context'

const HomeProjects = () => {

    const DICT = React.useContext(Context).dictionary.homeProjects;

    return (
        <section className={styles.projectsSection}>
            <SectionHeader title={DICT.PROJECTS} />
        </section>
    )
}

export default HomeProjects;
