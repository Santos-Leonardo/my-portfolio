import React from 'react'
import { NavLink, Link } from 'react-router-dom';

import styles from "./header.module.css"
import Logo from '../../components/logo/Logo';
import { Context } from '../../context/Context';
import euaFlag from '../../assets/images/icons/eua-flag.png'
import brazilFlag from '../../assets/images/icons/brazil-flag.png'

const Header = () => {

    const GLOBAL_DATA = React.useContext(Context);
    const DICT = GLOBAL_DATA.dictionary.header;
    const src = GLOBAL_DATA.systemLanguage === 'EN' ? euaFlag : brazilFlag

    const changeSystemLanguage = () => {

        GLOBAL_DATA.systemLanguage === 'EN'
            ? GLOBAL_DATA.setSystemLanguage('PT')
            : GLOBAL_DATA.setSystemLanguage('EN');
    }

    return (
        <header className={styles.header}>
            <Logo />
            <nav>
                <ul className={styles.navList}>
                    <li>{<NavLink to='projects' className={`${styles.navItem}`}>{DICT.PROJECTS}</NavLink>}</li>
                    <li>{<NavLink to='about' className={`${styles.navItem}`}>{DICT.ABOUTME}</NavLink>}</li>
                    <li>{<Link to='about' className={`${styles.navItem} ${styles.contact}`}>{DICT.CONTACT}</Link>}</li>
                    <li onClick={changeSystemLanguage}><button className={styles.languageBtn}><img src={src} alt="Flag" /></button></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
