import styles from './Card.module.css';
import sunIcon from '../../../assets/icons/sunny.png';

const Card = () => {
    return (
        <div className={styles.Card}>
            <div>12am</div>
            <img src={sunIcon} alt="" />
            <div>26</div>
        </div>
    )
}

export default Card
