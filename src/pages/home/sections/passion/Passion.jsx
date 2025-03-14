import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './passion.module.css'
import { Context } from '../../../../context/Context'
import me from '../../../../assets/images/me.png'
import PhraseDot from '../../../../components/phrasedot/PhraseDot'
import Button from '../../../../components/button/Button'

const Passion = () => {

    const DICT = React.useContext(Context).dictionary.passion;
    const navigate = useNavigate();

    return (
        <section className={styles.section}>
            <div className={`container ${styles.content}`}>   
                <div>
                    <p className={`${styles.phrase}`}>{DICT.PASSION1} <strong>{DICT.PASSION2}</strong> {DICT.PASSION3}<PhraseDot /></p>
                    <Button text={DICT.ABOUTME} onClick={() => { navigate('about')} } />
                </div>        
                <img className={styles.picture} src={me} alt="Me" />
            </div>
        </section>
    )
}

export default Passion;
