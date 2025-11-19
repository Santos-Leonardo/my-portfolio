import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './projectitem.module.css'
import { Context } from '../../../context/Context';
import Button from '../../button/Button';

const ProjectItem = ({ project, border = false }) => {

    const DICT = React.useContext(Context).dictionary.homeProjects;
    const lang = React.useContext(Context).systemLanguage;

    const navigate = useNavigate();

    const image = new URL(`../../../assets/images/projects/${project.shortName}/main.gif`, import.meta.url).href;
    
    const [position, setPosition] = React.useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = React.useState(false);
  
    const handleMouseMove = (e) => {
            
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setPosition({ x, y });
    };

    const getProjectSummary = (summary) => {

        if (summary?.charAt(130)) {
            return `${summary.slice(0, 130)}...`
        }

        return summary;
    }

    return (
        <li className={`${styles.project} ${border ? styles.border : ''}`} onClick={() => {navigate(`/project/${project.shortName}`)}} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className={styles.content}>
                {/* Project Title */}
                <div className={`code ${styles.projectName}`}>
                    <h3>{project.name} {project.ai ? <sup className={`${styles.ai} code`} title={DICT.USEAI}>AI</sup> : ''}</h3>                        
                </div>
                <p className={styles.projectSummary}>{getProjectSummary(lang === 'EN' ? project.summaryEN : project.summaryPT)}</p>
                {/* Project Stack List */}
                <div className={styles.stack}>
                    {project.stack.map((stack, i) => {
                        if (i < 4) return <img key={stack} src={new URL(`../../../assets/images/stack/${stack}.png`, import.meta.url).href} alt='Stack' title={stack} />
                    })}
                    {project.stack.length > 4 && (
                        <div className={styles.stackPlus}>+{project.stack.length - 4}</div>
                    )}
                </div>
                <Button text={DICT.MOREDETAILS} onClick={() => {navigate(`project/${project.shortName}`)}} />
            </div>
            {/* Project Image */}
            <img className={`${styles.img} ${styles.imgBg}`} src={image} alt="main" />
            {/* Circle Icon on Mouse Hover */}
            {isHovering && (
                <div className={`code ${styles.circle}`} style={{
                        top: position.y,
                        left: position.x,
                    }}
                >{DICT.VIEW}</div>
            )}
        </li>
    )
}

export default ProjectItem;
