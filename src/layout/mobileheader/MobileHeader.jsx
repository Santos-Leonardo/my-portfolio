import React, { useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

import { Context } from '../../context/Context';
import styles from './mobileheader.module.css'
import euaFlag from '../../assets/images/icons/eua-flag.png'
import brazilFlag from '../../assets/images/icons/brazil-flag.png'

const MobileHeader = ({ on, setOn }) => {

    const GLOBAL_DATA = React.useContext(Context);
    const DICT = GLOBAL_DATA.dictionary.header;
    const src = GLOBAL_DATA.systemLanguage === 'EN' ? euaFlag : brazilFlag

    const navigate = useNavigate();
    
    let [activeMenu, setActiveMenu] = React.useState('');
    const location = useLocation();

    React.useEffect(() => {
        setActiveMenu(location.pathname.split('/')[1]);
    }, [location]);

    const [menuClose, setMenuClose] = React.useState(false);

    const closeMenu = (route) => {

        setMenuClose(true);

        setTimeout(() => {
            
            setMenuClose(false);
            setOn(false);          
        }, 600);

        if (route) navigate(route);
    }

    return on
        ?   <nav className={`${styles.mobileMenu} ${menuClose ? styles.exit : ''}`}>
                {/* Close Menu */}
                <div className={styles.menuClose}>
                    <button onClick={() => { closeMenu(null) }} className={styles.closeBtn}>X</button>
                </div>
                {/* Navigation List */}
                <ul className={styles.navList}>
                    <li onClick={() => { closeMenu('projects') }} className={`${styles.navItem} ${ activeMenu === 'projects' ? styles.active : ''}`}>{DICT.PROJECTS}</li>
                    <li onClick={() => { closeMenu('about') }} className={`${styles.navItem} ${ activeMenu === 'about' ? styles.active : ''}`}>{DICT.ABOUTME}</li>
                    <li onClick={() => { closeMenu('contact') }} className={styles.navItem}>{DICT.CONTACT}</li>
                </ul>
                {/* Change System Language */}
                <button onClick={GLOBAL_DATA.changeSystemLanguage} className={styles.languageBtn}><img src={src} alt="Flag" /> <span>{GLOBAL_DATA.systemLanguage}</span></button>
            </nav>
        :   null
}

export default MobileHeader;
