import React from 'react'

import styles from './located.module.css'
import pin from '../../assets/images/icons/pin-white.svg'
import { Context } from '../../context/Context'

const Located = () => {

    const DICT = React.useContext(Context).dictionary.located;
    const [onHover, setOnHover] = React.useState(false);

    const handleHover = () => setOnHover(true);
    const handleLeave = () => setOnHover(false);
    const [screenSize, setScreenSize] = React.useState(window.innerWidth);

    window.addEventListener('resize', () => setScreenSize(window.innerWidth));
    
    return (
        <div
            onMouseOver={handleHover} 
            onTouchStart={handleHover} 
            onMouseLeave={handleLeave} 
            onTouchEnd={handleLeave}
            className={`${styles.locatedBox}`}
        >
            {(onHover || window.innerWidth <= 580) &&
                (<div >
                    <p className={styles.locatedAt}>{DICT.LOCATEDAT}</p>
                    <p>{DICT.LOCATION}</p>
                </div>)
            }
            <img src={pin} alt="Pin" />
        </div>
    )
}

export default Located;
