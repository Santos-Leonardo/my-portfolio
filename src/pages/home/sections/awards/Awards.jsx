import React from 'react'

import styles from './awards.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import { Context } from '../../../../context/Context'
import AWARDS from '../../../../assets/data/AWARDS';
import Award from './award/Award';

const Awards = () => {

    const DICT = React.useContext(Context).dictionary.awards;
    
    return (
        <section className={styles.section}>
            <SectionHeader title={DICT.AWARDS} />
            <ul className={`container ${styles.listWrapper}`}>
                {AWARDS.map((award, i) => {
                    return <Award key={award.name + i} award={award} />
                })}
            </ul>
        </section>
    )
}

export default Awards;
