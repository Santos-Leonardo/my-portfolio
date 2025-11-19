import React from 'react'

import styles from './education.module.css'
import SectionHeader from '../../../../components/sectionheader/SectionHeader';
import Button from '../../../../components/button/Button';
import { Context } from '../../../../context/Context'
import logoIPP from '../../../../assets/images/experiences/ipp.png'
import logoRZESZOW from '../../../../assets/images/experiences/rzeszow.svg'

const Education = () => {

    const DICT = React.useContext(Context).dictionary.education;

    return (
        <section className={styles.section}>
            <SectionHeader title={DICT.EDUCATION} />
            <div className={`container ${styles.educations}`}>
                {/* Colleges */}
                <ul className={styles.colleges}>
                    {/* IPP */}
                    <li className={styles.degree}>
                        <a href='https://ipportalegre.pt/pt/' target='_blank' className={styles.head}>
                            <img className={styles.logo} src={logoIPP} alt="Logo" />
                            <div>                
                                <h3 className='code'>{DICT.IPPDEGREE}</h3>
                                <p className={styles.issued}><strong>{DICT.IPPNAME}</strong> | Oct 2018 - Nov 2023</p>
                            </div>
                        </a>
                    </li>
                    {/* University of Rzeszów */}
                    <li className={styles.degree}>
                        <a href='https://www.ur.edu.pl/en/home' target='_blank' className={styles.head}>
                            <img className={styles.logo} src={logoRZESZOW} alt="Logo" />
                            <div>                
                                <h3 className='code'>{DICT.IPPDEGREE}</h3>
                                <p className={styles.issued}><strong>{DICT.RZESZOWNAME}</strong> (ERASMUS+) | Feb 2018 - Jul 2020</p>
                            </div>
                        </a>
                    </li>
                </ul>
                {/* Certifications */}
                <ul className={styles.colleges}>
                    {/* Full-Stack Development Certification */}
                    <li className={styles.degree}>
                        <a href='https://b7web.com.br/' target='_blank' className={styles.head}>
                            <div>                
                                <h3 className={`code ${styles.course}`}>{DICT.CERTIFICATION1}</h3>
                                <p className={styles.issued}><strong>B7WEB</strong> | Jul 2023</p>
                            </div>
                        </a>
                    </li>
                    {/* Front End & UX/UI Design Specialization */}
                    <li className={styles.degree}>
                        <a href='https://www.origamid.com/' target='_blank' className={styles.head}>
                            <div>                
                                <h3 className={`code ${styles.course}`}>{DICT.CERTIFICATION2}</h3>
                                <p className={styles.issued}><strong>Origamid</strong> | Oct 2021</p>
                            </div>
                        </a>
                    </li>
                    {/* SEO Specialization */}
                    <li className={styles.degree}>
                        <a href='https://www.udemy.com/' target='_blank' className={styles.head}>
                            <div>                
                                <h3 className={`code ${styles.course}`}>{DICT.CERTIFICATION3}</h3>
                                <p className={styles.issued}><strong>Udemy</strong> | Jan 2025</p>
                            </div>
                        </a>
                    </li>
                    <Button text={`${DICT.SEEALLCOURSES} (40+)`} onClick={() => { window.open('https://www.linkedin.com/in/leonardo-santos-dev/details/certifications/', '_blank'); }} arrow={true} />
                </ul>
            </div>
        </section>
    )
}

export default Education;
