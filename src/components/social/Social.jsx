import React from 'react'

import styles from './social.module.css'
import linkein from '../../assets/images/icons/linkedin.png'
import github from '../../assets/images/icons/github.png'
import email from '../../assets/images/icons/email.png'
import whatsapp from '../../assets/images/icons/whatsapp.png'

const Social = () => {

    return (
        <ul className={styles.socialBox}>
            <li className={styles.socialIcon} title='LinkedIn'><a href="https://www.linkedin.com/in/leonardo-santos-dev/" target='_blank'><img src={linkein} alt="LinkedIn" /></a></li>
            <li className={styles.socialIcon} title='GitHub'><a href="https://github.com/Santos-Leonardo" target='_blank'><img src={github} alt="GitHub" /></a></li>
            <li className={styles.socialIcon} title='E-mail'><a href="mailto:ferreirasantos.leonard@gmail.com" target='_blank'><img src={email} alt="E-mail" /></a></li>
            <li className={styles.socialIcon} title='WhatsApp'><a href="https://wa.me/message/JEDJKLKA3A64F1" target='_blank'><img src={whatsapp} alt="WhatsApp" /></a></li>
        </ul>
    )
}

export default Social;
