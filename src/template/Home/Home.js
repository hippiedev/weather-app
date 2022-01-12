import Header from '../../components/molecules/Header/Header';
import styles from './Home.module.css';
import cloudyIcon from '../../assets/icons/cloudy.png';
import Widget from '../../components/organisms/Widget/Widget';

function Home() {
    return (
      <div className={styles.Home}>
        <Header />
        <div className={styles.WeatherInfo}>
          <div className={styles.WeatherDate}>
            <img src={cloudyIcon} alt="" />
            <span className={styles.Date}>
              <div className={styles.Day}>Today</div>
              <div className={styles.WeekDay}>Sat, January 15th</div>
            </span>
          </div>
          <div className={styles.Temp}>28<span>o</span><span>C</span></div>
          <div className={styles.Location}>Lagos, Nigeria</div>
        </div>
        <Widget />
      </div>
    );
}

export default Home
