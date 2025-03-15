import React from 'react'

import styles from './head.module.css'
import { Context } from '../../../../context/Context'
import Social from '../../../../components/social/Social';
import ENVIRONMENT from '../../../../assets/data/environment'
import Located from '../../../../components/located/Located';
import Button from '../../../../components/button/Button';

const Head = () => {

    const DICT = React.useContext(Context).dictionary.head;

    return (
        <section className={styles.section}>
            <div className={`container ${styles.headContent}`}>
                {/* Intro Text */}
                <div className={styles.introText}>
                    <h2 className={styles.name}>{DICT.HELLO} Leonardo Santos</h2>
                    <h1 className={styles.work}>
                        <span className={styles.fullStack}>Full-Stack Software Engineer</span>
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
                    <Button text={DICT.OPENCV} onClick={() => {window.open(ENVIRONMENT.CV_PATH, '_blank')}} arrow={true} />
                </div>
            </div>
        </section>
    )
}

export default Head;
