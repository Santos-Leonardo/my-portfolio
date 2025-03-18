import React from 'react'

import styles from './timelineitem.module.css'
import { Context } from '../../../../../context/Context'

const TimelineItem = ({ experience, type }) => {

    const desc = React.useContext(Context).systemLanguage === 'EN' ? 'achievementsEN' : 'achievementsPT';
    const [onOver, setOnOver] = React.useState(false);

    return (
        <li onMouseOver={() => setOnOver(true)} onMouseLeave={() => setOnOver(false)} onClick={() => setOnOver(!onOver)} className={`${styles.experience} ${type}`}>
            {/* Position and Company Informations */}
            <div className={styles.cover}>
                <a href={experience.companyWesite} target='_blank'><img className={styles.logo} src={new URL(`../../../../../assets/images/experiences/${experience.companylogo}`, import.meta.url).href} alt="Logo" /></a>
                <div>
                    <h3 className={`code ${styles.position}`}>{experience.position}</h3>
                    <p className={styles.companyInfo}><strong>{experience.companyName}</strong> <small>•</small> {experience.location} | <em>{experience.workType}</em></p>
                    <p className={styles.dates}>{experience.dates} - {experience.contractType}</p>
                </div>
            </div>
            {/* Achievements */}
            <ul className={`${styles.achievements} ${onOver ? styles.show : ''}`}>
                {experience[desc].map((achievement, i) => {
                    return <li key={`achievement${i}`}>{achievement}</li>
                })}
            </ul>
        </li>
    )
}

export default TimelineItem;
