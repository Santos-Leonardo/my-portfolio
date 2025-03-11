import React from 'react'

import styles from './sectionheader.module.css'
import PhraseDot from '../../components/phrasedot/PhraseDot'

const SectionHeader = ({ title }) => {

    return (
        <h2 className={`${styles.title}`}>{title}<PhraseDot title={true} /></h2>
    )
}

export default SectionHeader;
