import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './services.module.css'
import { Context } from '../../../../context/Context'
import SectionHeader from '../../../../components/sectionheader/SectionHeader'
import Service from './service/Service'
import Button from '../../../../components/button/Button'

const Services = () => {

    const DICT = React.useContext(Context).dictionary.services;
    const navigator = useNavigate();

    return (
        <section className={styles.section}>
            {/* Section Title */}
            <SectionHeader title={DICT.SERVICES} />
            {/* Services List */}
            <ul className={`container ${styles.serviceList}`}>
                <Service icon={'webapps.png'} title={DICT.WEBAPPS} desc={DICT.DESC1} outputsList={DICT.OUTPUTS1} />
                <Service icon={'api.png'} title={DICT.API} desc={DICT.DESC2} outputsList={DICT.OUTPUTS2} />
                <Service icon={'databases.png'} title={DICT.DATABASES} desc={DICT.DESC3} outputsList={DICT.OUTPUTS3} />
            </ul>
            {/* CTA Button */}
            <div><Button text={DICT.GETINTOUCH} onClick={() => { navigator('#contact') }} /></div>
        </section>
    )
}

export default Services;
