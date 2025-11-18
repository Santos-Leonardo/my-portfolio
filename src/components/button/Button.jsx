import styles from './button.module.css'
import arrowRight from '../../assets/images/icons/arrow-right-green.svg'

const Button = ({ text, onClick, arrow = false }) => {

    return (
        <button onClick={onClick} className={styles.btn1}>
            {text}
            {arrow && (<img src={arrowRight} alt="Open" />)}
        </button>
    )
}

export default Button;
