import React from 'react'
import { useNavigate } from 'react-router-dom';

import styles from './projectitem.module.css'
import { Context } from '../../../context/Context';

const ProjectItem = ({ project }) => {

    const DICT = React.useContext(Context).dictionary.homeProjects;
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
            {/* Project Image */}
            <img className={styles.img} src={image} alt="main" />
            <div className={styles.content}>
                {/* Project Title */}
                <h3 className={``}>{project.name}</h3>
                {/* Project Stack List */}
                <div className={styles.stack}>
                    {project.stack.map((stack, i) => {
                        if (i < 4) return <img key={stack} src={new URL(`../../../assets/images/stack/${stack}.png`, import.meta.url).href} alt='Stack' title={stack} />
                    })}
                    {project.stack.length > 4 && (
                        <div className={styles.stackPlus}>+{project.stack.length - 4}</div>
                    )}
                </div>
            </div>
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
