import React, { useContext } from 'react';

import styles from './skills.module.css';
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import { Context } from '../../../../context/Context';

const Skills = () => {

    const context = useContext(Context);

    const DICT = context.dictionary.skills;
    const skillsList = context.SKILLS;
    const skillsLanguage = (context.systemLanguage === 'EN') ? 'softSkillsEN' : 'softSkillsPT';

    return (
        <section className={styles.section}>
            {/* Section Title */}
            <SectionHeader title={DICT.SKILLS} />
            {/* Hard Skills List */}
            <div className={styles.slider}>
                <ul className={styles.list}>
                    {skillsList.hardSkills.concat(skillsList.hardSkills).map((stack, index) => (
                        <li key={index + index}>
                            <img 
                                src={new URL(`../../../../assets/images/stack/${stack}.png`, import.meta.url).href} 
                                alt={stack} 
                                title={stack} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
            {/* Soft Skills List */}
            <div className={styles.slider}>
                <ul className={`${styles.list} ${styles.soft}`}>
                    {skillsList[skillsLanguage].concat(skillsList[skillsLanguage]).map((skill, index) => (
                        <li key={skill + index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Skills;
