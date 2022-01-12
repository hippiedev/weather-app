import styles from './Header.module.css';
import burgerIcon from '../../../assets/icons/angle-right.svg';

const Header = () => {
    return (
        <div className={styles.Header}>
            <img src={burgerIcon} alt="" />
            <div className={styles.Logo}>Weather App</div>

        </div>
    )
}

export default Header
