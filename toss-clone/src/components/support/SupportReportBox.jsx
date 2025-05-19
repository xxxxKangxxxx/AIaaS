// src/components/support/SupportReportBox.jsx
import React from 'react';
import styles from './SupportReportBox.module.css';

const SupportReportBox = () => {
  return (
    <section className={styles.reportBox}>
      <h2>금전 피해를 입으셨나요?</h2>
      <p>
        혹시라도 토스에서 금전 피해를 입으셨다면 신고해주세요.
        앞으로 고객님이 안심하고 토스를 쓰실 수 있도록, <br />
        토스의 잘못이 아니라도 피해 금액을 보상해드려요.
      </p>

      <div className={styles.reportButtons}>
        <button className={`${styles.wide} ${styles.reportLockButton}`}>
            <div className={styles.icon}>🔒</div>
            <span>토스 계정을 잠시 잠그고 싶어요</span>
        </button>
      </div>

      <div className={styles.iconButtons}>
        <button className={styles.iconButton}>
          <div className={styles.icon}>👤</div>
          <span>명의 도용 신고</span>
        </button>
        <button className={styles.iconButton}>
          <div className={styles.icon}>🚨</div>
          <span>보이스피싱 신고</span>
        </button>
        <button className={styles.iconButton}>
          <div className={styles.icon}>📱</div>
          <span>분실/도난/탈취 신고</span>
        </button>
        <button className={styles.iconButton}>
          <div className={styles.icon}>👜</div>
          <span>중고거래 사기 신고</span>
        </button>
      </div>
    </section>
  );
};

export default SupportReportBox;
