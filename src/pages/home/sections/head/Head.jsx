import React from 'react'

import styles from './head.module.css'
import { Context } from '../../../../context/Context'
import Social from '../../../../components/social/Social';
import ENVIRONMENT from '../../../../assets/data/environment'
import arrowRight from '../../../../assets/images/icons/arrow-right-green.svg'
import Located from '../../../../components/located/Located';

const Head = () => {

    const DICT = React.useContext(Context).dictionary.head;

    return (
        <section className={styles.section}>
            <div className={`container ${styles.headContent}`}>
                {/* Intro Text */}
                <div className={styles.introText}>
                    <h2 className={styles.name}>{DICT.HELLO} Leonardo Santos</h2>
                    <h1 className={styles.work}>
                        <span className={styles.fullStack}>Full-Stack Developer</span>
                        <span><small className={`code ${styles.and}`}>&&</small> UX/UI Designer</span>
                    </h1>
                    <p className={styles.aboutText}>{DICT.IMSENIOR} <strong>{DICT.FIVEYEARS}</strong> {DICT.WITHYEARSOFEXPERIENCE} <strong>{DICT.STACKS}</strong> {DICT.END}</p>
                </div>
                 {/* Side Infos */}
                 <aside className={styles.asideInfosBox}>
                    <Social />
                    <Located />
                </aside>
                {/* CV Button */}
                <div className={styles.btnArea}>
                    <button onClick={() => { window.open(ENVIRONMENT.CV_PATH, '_blank') }} className='btn1'>
                        {DICT.OPENCV}
                        <img src={arrowRight} alt="Open" />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Head;
