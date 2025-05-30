// src/components/home/SecondSection.jsx
import React from 'react';
import styles from './SecondSection.module.css';

const SecondSection = () => {
  return (
    <section className={styles.secondSection}>
      <p>
        내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.<br />
        이제껏 경험 못 했던 쉽고 편리한 금융 서비스,<br />
        토스와 함께라면 당신의 일상이 새로워질 거예요.
      </p>
    </section>
  );
};

export default SecondSection;