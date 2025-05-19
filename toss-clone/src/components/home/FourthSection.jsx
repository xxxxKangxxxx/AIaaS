// src/components/home/FourthSection.jsx
import React from 'react';
import styles from './FourthSection.module.css';

const FourthSection = () => {
  return (
    <section className={`${styles.section} scroll-fade-up`}>
      <div className={styles.textBox}>
        <p className={styles.subtitle}>송금</p>
        <h2>
          간편하고 안전하게<br />
          수수료는 평생 무료로,<br />
          이런 송금 써보셨나요?
        </h2>
      </div>
    </section>
  );
};

export default FourthSection;