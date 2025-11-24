import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './timelineitem.module.css'
import { Context } from '../../../../../context/Context'
import arrowDown from '../../../../../assets/images/icons/arrow-down-black.svg'

const TimelineItem = ({ experience, type }) => {

    const desc = React.useContext(Context).systemLanguage === 'EN' ? 'achievementsEN' : 'achievementsPT';
    const DICT = React.useContext(Context).dictionary.experience;
    const [onOver, setOnOver] = React.useState(false);
    const navigate = useNavigate();

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
            <img className={styles.arrowExpand} src={arrowDown} alt="Expand" />
            {/* Achievements */}
            <ul className={`${styles.achievements} ${onOver ? styles.show : ''}`}>
                {experience[desc].map((achievement, i) => {
                    return <li key={`achievement${i}`}>{achievement}</li>
                })}
            </ul>
            {/* Related Project */}
            {experience.projects.length ? <ul className={`${styles.achievements} ${styles.relatedProjects} ${onOver ? styles.show : ''}`}>
                {experience.projects.map((project, i) => {
                    return <li key={`project${i}`} onClick={() => {navigate(`/project/${project.replace(/[()]/g, '').replace(/[\s-]+/g, '-').toLowerCase()}`)}} title={DICT.VISITPROJECT}>{project}</li>
                })}
            </ul> : ''}
        </li>
    )
}

export default TimelineItem;
