import React from 'react'

import styles from './award.module.css'
import { Context } from '../../../../../context/Context'

const Award = ({ award }) => {

    const desc = React.useContext(Context).systemLanguage === 'EN' ? 'descriptionEN' : 'descriptionPT';

    return (
        <li className={styles.item}>
            <div className={styles.head}>
                <img className={styles.logo} src={new URL(`../../../../../assets/images/awards/${award.icon}`, import.meta.url).href} alt="Logo" />
                <div>                
                    <h3 className='code'>{award.name} | <strong>{award.position}</strong> </h3>
                    <p className={styles.issued}>{award.issued} - {award.date}</p>
                </div>
            </div>
            <p className={styles.desc}>{award[desc]}</p>
        </li>
    )
}

export default Award;
