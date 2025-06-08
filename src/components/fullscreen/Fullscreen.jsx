import React from "react";

import styles from './fullscreen.module.css'

export const Fullscreen = ({ img, triggerKey }) => {

    const [on, setOn] = React.useState(true);

    React.useEffect(() => {
        setOn(true);
    }, [triggerKey]);

    React.useEffect(() => {

        const handleKeyPress = (e) => {
            
            if (e.key === 'Escape') {
                setOn(false);
            }
        };

        window.addEventListener('keyup', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };

    }, []);

    if (!on) return null;

    return (
        <div onClick={() => { setOn(false); }} className={styles.box}>
            <img src={img} alt="Project Image" />
        </div>
    );
};

export default Fullscreen;
