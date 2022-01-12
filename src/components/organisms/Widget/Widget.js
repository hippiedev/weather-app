import Card from '../../molecules/Card/Card';
import styles from './Widget.module.css';

const Widget = () => {
    return (
        <div className={styles.Widget}>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}

export default Widget
