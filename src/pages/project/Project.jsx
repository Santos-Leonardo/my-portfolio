import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import styles from './project.module.css'
import PROJECTS from '../../assets/data/PROJECTS'
import Button from '../../components/button/Button'
import { Context } from '../../context/Context'
import gitHubLogo from '../../assets/images/icons/github.png'
import useScroll from '../../hooks/useScroll'
import Fullscreen from '../../components/fullscreen/Fullscreen'
import restartIcon from '../../assets/images/icons/restart.svg'

const Project = () => {

    const DICT = React.useContext(Context).dictionary.project;
    const lang = React.useContext(Context).systemLanguage; 
    const { y } = useScroll();

    const videoTag = React.useRef(null);
    const [onVideoHover, setOnVideoHover] = React.useState(false);

    const [project, setProject] = React.useState(null);
    const [coverImg, setCoverImg] = React.useState(null);
    const [videoURL, setVideoURL] = React.useState(null);

    const param = useParams();
    const navigate = useNavigate();

    const [imageSrc, setImageSrc] = React.useState(null);
    const [fullscreenKey, setFullscreenKey] = React.useState(0);
    
    const [paragraphs, setParagraphs] = React.useState(null);
    const [expanded, setExpanded] = React.useState(false);

    const handleImageClick = (src) => {
        setImageSrc(src);
        setFullscreenKey(prev => prev + 1);
    };

    const [showRestartedMsg, setShowRestartedMsg] = React.useState(false);
    const restartVideo = () => {

        videoTag.current.currentTime = 0;

        setShowRestartedMsg(true);

        setTimeout(() => {
            setShowRestartedMsg(false);
        }, 2500);
    };

    // Set the project information
    React.useEffect(() => {

        if (param?.name) {

            const projectItem = PROJECTS.find(item => item.shortName === param.name); 

            if (projectItem) {
                
                setProject(projectItem);
                setCoverImg(new URL(`../../assets/images/projects/${projectItem.shortName}/cover.png`, import.meta.url).href);
                setVideoURL(new URL(`../../assets/images/projects/${projectItem.shortName}/record.mp4`, import.meta.url).href);
                setParagraphs(lang === 'EN' ? projectItem.summaryEN.split('\n') : projectItem.summaryPT.split('\n'));
            }
        }
    }, [param]);

    // Update project description language
    React.useEffect(() => {
        if (project) setParagraphs(lang === 'EN' ? project.summaryEN.split('\n') : project.summaryPT.split('\n'));
    }, [lang]);

    // Automatically play the video
    React.useEffect(() => {        
        if (y > 1150) { videoTag.current?.play(); }
    }, [y]);

    if (!project) return null;
    return (
        <section className={styles.page}>
            {/* Cover Image */}
            <div className={styles.cover}>
                <img src={coverImg} alt="Cover image" />
            </div>
            {/* Title */}
            <div className={styles.titleArea}>
                <h1 className={`code ${styles.projectName}`}>{project.name}</h1>
                {/* Description */}
                <div>
                    <p>{paragraphs[0]} {paragraphs[1] && !expanded ? paragraphs[1].slice(0, 7)+'...' : ''}</p>
                    {expanded && paragraphs.slice(1).map((para, i) => (<p key={i + 1}>{para}</p>))}
                    {!expanded && paragraphs.length > 1 && (<button className={styles.readMoreBtn} onClick={() => setExpanded(true)}>{ DICT.READMORE }</button>)}
                </div> 
                {/* Stack List */}
                <ul className={styles.stackList}>
                    {project.ai && <li key={'ai'} className={`code ${styles.AI}`} title={DICT.USESAI}>AI</li>}
                    {project.stack.map((stack) => {
                        return <li key={stack}><img src={new URL(`../../assets/images/stack/${stack}.png`, import.meta.url).href} alt='Stack' title={stack} /></li>
                    })}
                </ul>
                {/* Buttons */}
                {(project.link.length || project.github.length) ? <div className={styles.buttons}>
                    {project.link.length ? 
                        <Button text={DICT.VISITPROJECT} arrow={true} onClick={() => { window.open(project.link, '_blank'); }} /> : ''}
                    {project.github.length ?
                        <a href={project.github} target='_blank' className={styles.githubBtn}>
                            <img src={gitHubLogo} alt="GitHub" />
                        </a> : ''}
                </div> : ''}
            </div>
            {/* Gallery */}
            <section className={`${styles.galleryBox} ${(videoURL.includes('undefined') && project.photos === 0) ? styles.whiteBg : ''}` }>
                {/* Video */}
                {!videoURL.includes('undefined') && <div className={styles.videoBox} onMouseOver={() => { setOnVideoHover(true); }} onMouseLeave={() => { setOnVideoHover(false); }}>
                    <video ref={videoTag} src={videoURL} disablePictureInPicture loop muted preload='auto'></video>
                    {onVideoHover && <div className={styles.restartVideo} onClick={restartVideo}>
                        {!showRestartedMsg ? <img src={restartIcon} alt="Restart" /> : <span>{DICT.RESTARTED}</span>}
                    </div>}
                </div>}
                {/* Pictures */}
                {project.photos > 0 && <div className={styles.gallery}>
                    {[...Array(Math.floor(project.photos / 3))].map((_, i) => {
                        return  <div key={i+'column'} className={styles.galleryCollumn}>
                                    {[...Array(3)].map((_, j) => {
                                        let src = new URL(`../../assets/images/projects/${project.shortName}/${i}${j}.png`, import.meta.url).href;
                                        return <img key={'img'+j} src={src} alt="Picture" onClick={() => { handleImageClick(src); }} />
                                    })}
                                </div>
                    })}
                </div>}
                <Button text={`${DICT.OTHERPROJECTS}`} onClick={() => { navigate('/projects')} } />
            </section>
            {/* Fullscreen Image */}
            {imageSrc && <Fullscreen img={imageSrc} triggerKey={fullscreenKey} />}
        </section>
    )
}

export default Project;
