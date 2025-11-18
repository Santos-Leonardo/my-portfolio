import React from 'react'

import styles from './skills.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader'
import { Context } from '../../../../context/Context'
import Button from '../../../../components/button/Button'
import useInfiniteScroll from '../../../../hooks/useInfiniteScroll'

const Skills = () => {

    const context = React.useContext(Context);
    const DICT = context.dictionary.skills;
    const skillsList = context.SKILLS;
    const skillsLanguage = (context.systemLanguage === 'EN') ? 'softSkillsEN' : 'softSkillsPT';

    const hardSkillsScroll = useInfiniteScroll(0.8); 
    const softSkillsScroll = useInfiniteScroll(-0.6);

    return (
        <section className={styles.section}>
            <SectionHeader title={DICT.SKILLS} />            
            {/* Hard Skills List */}
            <div className={styles.slider}>
                <ul 
                    className={styles.list} 
                    ref={hardSkillsScroll.ref}
                    {...hardSkillsScroll.events}
                    style={{ cursor: hardSkillsScroll.isDragging ? 'grabbing' : 'grab' }}
                >
                    {skillsList.hardSkills.concat(skillsList.hardSkills).map((skill, index) => (
                        <li key={index + index}>
                            <img 
                                src={new URL(`../../../../assets/images/stack/${skill.stack}.png`, import.meta.url).href} 
                                alt={skill.stack} 
                                title={skill.stack} 
                            />
                            <p className={styles.stackName}>{skill.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Soft Skills List */}
            <div className={styles.slider}>
                <ul 
                    className={`${styles.list} ${styles.soft}`}
                    ref={softSkillsScroll.ref}
                    {...softSkillsScroll.events}
                    style={{ cursor: softSkillsScroll.isDragging ? 'grabbing' : 'grab' }}
                >
                    {skillsList[skillsLanguage].concat(skillsList[skillsLanguage]).map((skill, index) => (
                        <li key={skill + index}>{skill}</li>
                    ))}
                </ul>
            </div>
            {/* Section CTA */}
            <div className={styles.skillsButtonArea}>
                <Button text={`${DICT.SKILLSLIST}`} onClick={() => { window.open('https://www.linkedin.com/in/leonardo-santos-dev/details/skills/', '_blank'); }} arrow={true} />
            </div>
        </section>
    );
};

export default Skills;
