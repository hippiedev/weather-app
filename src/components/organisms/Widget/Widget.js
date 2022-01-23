import Card from '../../molecules/Card/Card';
import styles from './Widget.module.css';

const Widget = () => {
    return (
        <div className={styles.Widget}>
        <div className={styles.CardWrap}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        </div>
    )
}

export default Widget
