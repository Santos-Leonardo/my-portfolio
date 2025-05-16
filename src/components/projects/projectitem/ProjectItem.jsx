import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './projectitem.module.css'
import { Context } from '../../../context/Context';
import Button from '../../button/Button';

const ProjectItem = ({ project }) => {

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

    return (
        <li className={styles.project} onClick={() => {navigate(`project/${project.shortName}`)}} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            <div className={styles.content}>
                {/* Project Title */}
                <div className={styles.projectName}>
                    <h3>{project.name}</h3>
                    {project.ai ? <span className={`${styles.ai} code`} title={DICT.USEAI}>AI</span> : ''}    
                </div>
                <p className={styles.projectSummary}>{lang === 'EN' ? project.summaryEN : project.summaryPT}</p>
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
