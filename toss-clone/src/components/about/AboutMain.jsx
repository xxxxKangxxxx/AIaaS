// src/components/about/AboutMain.jsx
import React from 'react';
import styles from './AboutMain.module.css';

const AboutMain = () => {
  return (
    <section className={styles.mainContent}>
      <h1>
        금융, 그 이상의<br />
        역사를 만들고 있습니다
      </h1>
      <div className={styles.scrollIndicater}>
        <img
          src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png"
          alt="scroll down"
          className={styles.scrollDownIcon}
        />
      </div>
    </section>
  );
};

export default AboutMain;
