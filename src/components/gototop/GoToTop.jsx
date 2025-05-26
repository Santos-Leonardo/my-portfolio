import styles from './gototop.module.css'
import arrowPath from '../../assets/images/icons/arrow-up-white.svg'
import useScroll from '../../hooks/useScroll'

const GoToTop = () => {

    const { y } = useScroll();

    return y < (window.innerHeight * 0.5) ? '' :
    (
        <div className={styles.topWrapper} title='Top' onClick={() => document.body.scrollIntoView({behavior: 'smooth'})}>
            <img src={arrowPath} alt="Arrow top" />
        </div>
    );
}

export default GoToTop;
