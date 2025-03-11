import React from 'react'

import styles from "./phrasedot.module.css"

const PhraseDot = ({title = false}) => {

    return (
        <span className={`${styles.dot} ${title ? styles.onTitle : ''}`}></span>
    )
}

export default PhraseDot;
