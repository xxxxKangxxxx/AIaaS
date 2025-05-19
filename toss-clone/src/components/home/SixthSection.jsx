// src/components/home/SixthSection.jsx
import React from 'react';
import styles from './SixthSection.module.css';

const SixthSection = () => {
  return (
    <section className={`${styles.sixthSet} scroll-fade-up`}>
      <div className={styles.sixthLeft}>
        <div className={styles.sixthImage}>
          <img
            src="https://static.toss.im/assets/homepage/newtossim/section1_2_02.png"
            alt="송금 사기"
            className={styles.sendScam}
          />
        </div>
      </div>
      <div className={styles.sixthRight}>
        <p className={styles.sixthSubtitle}>⛨ 사기계좌 조회</p>
        <h2>
          송금 전 사기 내역 조회로<br />
          피해를 미리 방지할 수 있어요
        </h2>
        <p className={styles.sixthText}>
          송금 전 토스가 알아서 사기 내역 조회를 해드려요.<br />
          상대방의 연락처 또는 계좌가 사기 계좌인지 조회해<br />
          안전하게 송금할 수 있어요.
        </p>
      </div>
    </section>
  );
};

export default SixthSection;