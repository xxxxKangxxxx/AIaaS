// src/components/home/SeventhSection.jsx
import React from 'react';
import styles from './SeventhSection.module.css';

const SeventhSection = () => {
  return (
    <section className={`${styles.seventhSet} scroll-fade-up`}>
      <div className={styles.seventhLeft}>
        <p className={styles.seventhSubtitle}>🕗 자동이체 예약</p>
        <h2>
          은행 점검 시간,<br />
          기다릴 필요 없어요
        </h2>
        <p className={styles.seventhText}>
          은행 점검 시간에는 자동이체 예약을 이용해보세요.<br />
          점검 시간이 끝나면 토스가 알아서 송금해드릴게요.
        </p>
      </div>
      <div className={styles.seventhRight}>
        <div className={styles.seventhImage}>
          <img
            src="https://static.toss.im/assets/homepage/newtossim/section1_2_03.png"
            alt="은행 점검"
            className={styles.checkTime}
          />
        </div>
      </div>
    </section>
  );
};

export default SeventhSection;