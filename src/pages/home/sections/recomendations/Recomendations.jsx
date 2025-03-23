import React from 'react'

import styles from './recomendations.module.css'
import linkedinPath from '../../../../assets/images/icons/linkedin.png'
import arrowRight from '../../../../assets/images/icons/arrow-right-black.svg'
import arrowLeft from '../../../../assets/images/icons/arrow-left-black.svg'
import { Context } from '../../../../context/Context'

const Recomendations = () => {

    const { RECOMENDATIONS } = React.useContext(Context);

    const [index, setIndex] = React.useState(0);
    const [fade, setFade] = React.useState(true);

    const setRecomedation = (forward) => {

        setFade(false);

        setTimeout(() => {

            let value = forward ? index + 1 : index - 1;
            if (value < 0) value = RECOMENDATIONS.length - 1;
            else if (value >= RECOMENDATIONS.length) value = 0;
            
            setIndex(value);
            setFade(true);

        }, 300);
    };

    return (
        <section className={styles.section}>
            <ul className={styles.wrapper}>
                <li className={`${styles.recomendation} ${fade ? styles.active : ""}`}>
                    <blockquote><strong>&ldquo;</strong>{RECOMENDATIONS[index].phrase}<strong>&rdquo;</strong></blockquote>
                    <div className={styles.person}>
                        <a className={styles.personHeader} href={RECOMENDATIONS[index].linkedin} target='_blank'>
                            <img src={linkedinPath} alt="LinkedIn" />                                              
                            <p><strong>{RECOMENDATIONS[index].person}</strong> &mdash; {RECOMENDATIONS[index].position}</p>
                        </a>                        
                    </div>
                </li>
            </ul>
            <div className={styles.btnArea}>
                <img onClick={() => setRecomedation(false)} className={styles.arrow} src={arrowLeft} alt="Back" />
                <img onClick={() => setRecomedation(true)} className={styles.arrow} src={arrowRight} alt="Forward" />
            </div>
        </section>
    );
}

export default Recomendations;
