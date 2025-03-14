import React from 'react'
import { Link } from "react-router-dom"

import styles from './logo.module.css'

const Logo = ({ color }) => {
    return <Link to='/' className={`code ${styles.logo} ${ color === 'white' ? styles.white : ''}`}>Leonardo<span className={styles.dot}>.</span>dev</Link>;     
}

export default Logo;
