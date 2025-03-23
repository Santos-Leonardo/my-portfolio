import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from "./header.module.css"
import Logo from '../../components/logo/Logo';
import { Context } from '../../context/Context';
import euaFlag from '../../assets/images/icons/eua-flag.png'
import brazilFlag from '../../assets/images/icons/brazil-flag.png'
import MobileHeader from '../mobileheader/MobileHeader';
import Button from '../../components/button/Button';

const Header = () => {

    const GLOBAL_DATA = React.useContext(Context);
    const DICT = GLOBAL_DATA.dictionary.header;
    const src = GLOBAL_DATA.systemLanguage === 'EN' ? euaFlag : brazilFlag;

    const scrollToFooter = () => {
        GLOBAL_DATA.footerRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    const [isMobileMenuActive, setIsMobileMenuActive] = React.useState(false);
    const [fixed, setFixed] = React.useState(false);

    React.useEffect(() => {

        const handleScroll = () => { setFixed(window.scrollY > 10); };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => { window.removeEventListener('scroll', handleScroll); };

    }, []);    

    return (
        <header className={`container ${styles.header} ${fixed ? styles.fixed : ''}`}>
            <Logo />
            {/* Desktop Menu */}
            <nav className={styles.desktopMenu}>
                <ul className={styles.navList}>
                    <li>{<NavLink to='projects' className={`${styles.navItem}`}>{DICT.PROJECTS}</NavLink>}</li>
                    <li>{<NavLink to='about' className={`${styles.navItem}`}>{DICT.ABOUTME}</NavLink>}</li>
                    <li className={styles.contact}><Button text={DICT.CONTACT} onClick={scrollToFooter} /></li>
                    <li onClick={GLOBAL_DATA.changeSystemLanguage}><button className={styles.languageBtn}><img src={src} alt="Flag" /></button></li>
                </ul>
            </nav>
            {/* Mobile Menu Icon */}
            <div onClick={() => { setIsMobileMenuActive(!isMobileMenuActive) }} className={styles.mobileMenuIcon}>
                <div className={styles.menuBar}></div>
                <div className={styles.menuBar}></div>
                <div className={styles.menuBar}></div>
            </div>
            <MobileHeader on={isMobileMenuActive} setOn={setIsMobileMenuActive} />
        </header>
    )
}

export default Header;
