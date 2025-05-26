import { useContext } from 'react'

import styles from "./notfound404.module.css"
import { Context } from '../../context/Context'
import Button from '../../components/button/Button'
import { useNavigate } from 'react-router-dom'

const NotFound404 = () => {

    const DICT = useContext(Context).dictionary.error404;
    const navigate = useNavigate();

    return (
        <>
            <section className={styles.page}>
                <h2 className={`code ${styles.error}`}>404</h2>
                <p className={styles.notFound}>{ DICT.PAGENOTFOUND }</p>
                <Button text={DICT.SEEPROJECTS} onClick={() => { navigate('/projects'); }} arrow={true} />
            </section>
        </>
    )
}

export default NotFound404;
