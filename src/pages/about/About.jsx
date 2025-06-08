import React from 'react'
import { useNavigate } from 'react-router-dom';

import { Context } from '../../context/Context'
import PhraseDot from '../../components/phrasedot/PhraseDot'
import styles from './about.module.css'
import me from '../../assets/images/me2.jpg'
import Button from '../../components/button/Button'

const About = () => {
    
    const DICT = React.useContext(Context).dictionary.about;
    const [width, setWidth] = React.useState(window.innerWidth);

    const navigate = useNavigate();
    const numberOfProjects = React.useContext(Context).PROJECTS.length;

    React.useEffect(() => {
        
        document.body.scrollIntoView({behavior: 'smooth'});

        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };

    }, []);

    return (
        <section className={styles.page}>
            <div className={styles.head}>
                <div className={styles.textArea}>
                    <h1 className={`code ${styles.pageTitle}`}>{DICT.DRIVENBY}<PhraseDot title={false} /></h1>
                    <p>{DICT.WHATIDO}</p>
                    <p>{width > 890 ? DICT.EXP : ''}</p>
                    <p>{width > 890 ? DICT.DEGREE : ''}</p>
                    <p>{width > 890 ? DICT.GETINTOUCH : ''}</p>
                    <Button text={`${DICT.VIEWORK} (${numberOfProjects})`} onClick={() => { navigate('/projects')} } />
                </div>
                <img className={styles.picture} src={me} alt="Me" />
            </div>
        </section>
    )
}

export default About;
