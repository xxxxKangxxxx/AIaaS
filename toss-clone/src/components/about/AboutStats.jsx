// src/components/about/AboutStats.jsx
import React from 'react';
import styles from './AboutStats.module.css';

const AboutStats = () => {
  return (
    <section className={styles.statsSection}>
      <div className={styles.statsText}>
        <h2>
          변화를 열망하는 사람들이 모여,<br />
          역사에 남을만한 변화를 만듭니다.
        </h2>
        <div className={styles.statsNumbers}>
          <div className={styles.stats}>
            <p className={styles.label}>월간 활성 사용자</p>
            <p className={styles.value}>2,480만 +</p>
          </div>
          <div className={styles.stats}>
            <p className={styles.label}>누적 가입자 수</p>
            <p className={styles.value}>2,800만 +</p>
          </div>
          <div className={styles.stats}>
            <p className={styles.label}>서비스 수</p>
            <p className={styles.value}>100개 +</p>
          </div>
        </div>
      </div>
      <div className={styles.statsGraph}></div>
    </section>
  );
};

export default AboutStats;
