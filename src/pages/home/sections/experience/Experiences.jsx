import React from 'react'

import styles from './experiences.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import { Context } from '../../../../context/Context'
import EXPERIENCES from '../../../../assets/data/EXPERIENCES';
import TimelineItem from './timelineitem/TimelineItem';

const Experiences = () => {

    const DICT = React.useContext(Context).dictionary.experience;
    
    return (
        <section className={styles.section}>
            <SectionHeader title={DICT.EXPERIENCE} />
            <ul className={`container ${styles.timelineWrapper}`}>
                {EXPERIENCES.map((experience, i) => {
                    return <TimelineItem key={experience.companyName + i} experience={experience} type={i % 2 === 0 ? "even" : "odd"} />
                })}
            </ul>
        </section>
    )
}

export default Experiences;
