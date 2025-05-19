// src/components/home/FifthSection.jsx
import React from 'react';
import styles from './FifthSection.module.css';

const FifthSection = () => {
  return (
    <section className={`${styles.fifthSet} scroll-fade-up`}>
      <div className={styles.fifthLeft}>
        <p className={styles.fifthSubtitle}>₩ 평생 무료 송금</p>
        <h2>
          토스 평생 무료송금으로<br />
          모두의 금융에 자유를
        </h2>
        <p className={styles.fifthText}>
          누구에게 보내든 은행 상관 없이,<br />
          이제 토스와 함께 수수료 걱정 없이 송금하세요.
        </p>
      </div>
      <div className={styles.fifthImage}>
        <img
          src="https://static.toss.im/assets/homepage/newtossim/section1_2_01_re.png"
          alt="송금"
          className={styles.sendMoney}
        />
      </div>
    </section>
  );
};

export default FifthSection;