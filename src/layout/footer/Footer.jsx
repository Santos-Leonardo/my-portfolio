import React, { useContext } from 'react'

import styles from "./footer.module.css"
import { Context } from '../../context/Context'
import PhraseDot from '../../components/phrasedot/PhraseDot'
import linkedinLogoPath from '../../assets/images/icons/linkedin-white.webp'
import githubLogoPath from '../../assets/images/icons/github-white.webp'
import whatsappLogoPath from '../../assets/images/icons/whatsapp-white.png'
import copyrightLogoPath from '../../assets/images/icons/copy.webp'
import pinPath from '../../assets/images/icons/pin-white.svg'

const Footer = () => {

    const DICT = useContext(Context).dictionary.footer;
    const { footerRef } = useContext(Context);

    return (
        <footer ref={footerRef}>
            <h2 className='code'>{DICT.LETSWORKTOGETHER}<PhraseDot title={true} /></h2>
            <ul className={styles.contactInfo}>
                <li><a className={styles.link} href="mailto:ferreirasantos.leonard@gmail.com" target='_blank'>ferreirasantos.leonard@gmail.com</a></li>
                <li><a className={styles.link} href="tel:+5532985129223" target='_blank'>+55 32 98512-9223</a></li>
                <li className={styles.contactLogos}>
                    <a href="https://wa.me/message/JEDJKLKA3A64F1" target='_blank'><img src={whatsappLogoPath} alt="Logo" /></a>
                    <a href="https://www.linkedin.com/in/leonardo-santos-dev/" target='_blank'><img src={linkedinLogoPath} alt="Logo" /></a>
                    <a href="https://github.com/Santos-Leonardo" target='_blank'><img src={githubLogoPath} alt="Logo" /></a>
                </li>
            </ul>
            <div className={styles.footerBottom}>
                <div className={styles.location}>
                    <img src={pinPath} alt="" />
                    <p>{DICT.LOCATION}</p>
                </div>
                <p className={styles.copyright}>Copyright <img src={copyrightLogoPath} alt="Logo" /> { new Date().getFullYear() } &mdash; Leonardo Santos</p>
            </div>
        </footer>
    )
}

export default Footer;
