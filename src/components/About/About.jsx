
import styles from "./About.module.css";
import { RxDoubleArrowRight } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.about}>
      <div className={styles.content}>
        <h3>Добро пожаловать на нашу страничку!</h3>
        <p>Мы с радостью поможем в организации незабываемых праздников! </p>
        <p>
          Наше приложение было создано с одной целью: сделать планирование
          вашего идеального события простым, веселым и беззаботным.
        </p>

        <h3>Наша миссия</h3>
        <p>
          Мы верим, что каждый заслуживает праздника, который отражает его
          индивидуальность и оставляет теплые воспоминания на долгие годы. Наша
          миссия — предоставить вам инструменты, идеи и вдохновение для создания
          таких событий, будь то день рождения, юбилей или семейный праздник.
        </p>
        <button onClick={() => navigate('/party-options')}><p>Начать планировать праздник</p><RxDoubleArrowRight size={20}/> </button>
      </div>
    </div>
  );
};

export default About;
