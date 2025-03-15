import React from 'react'

import styles from './service.module.css'

const Service = ({ icon = null, title, desc, outputsList }) => {

    const outputs = outputsList.split(", ");

    return (
        <li className={styles.service}>
            {icon && <img className={styles.serviceIcon} src={new URL(`../../../../../assets/images/icons/${icon}`, import.meta.url).href} alt="Icon" />}
            <h3 className={`code ${styles.serviceTitle}`}>{title}</h3>
            <p className={styles.serviceDescription}>{desc}</p>
            <ul className={styles.serviceOutputs}>
                {outputs.map((output) => {
                    return <li key={output}>{output}</li>
                })}
            </ul>
        </li>
    )
}

export default Service;
