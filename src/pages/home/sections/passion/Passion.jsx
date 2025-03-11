import React from 'react'

import styles from './passion.module.css'
import { Context } from '../../../../context/Context'
import me from '../../../../assets/images/me.png'
import PhraseDot from '../../../../components/phrasedot/PhraseDot'

const Passion = () => {

    const DICT = React.useContext(Context).dictionary.passion;

    return (
        <section className={styles.section}>
            <div className={`container ${styles.content}`}>           
                <p className={`${styles.phrase}`}>{DICT.PASSION1} <strong>{DICT.PASSION2}</strong> {DICT.PASSION3}<PhraseDot /></p>
                <img className={styles.picture} src={me} alt="Me" />
            </div>
        </section>
    )
}

export default Passion;
