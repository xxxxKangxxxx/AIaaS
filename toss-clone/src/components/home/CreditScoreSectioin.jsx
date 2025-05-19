// src/components/home/CreditScoreSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import styles from './CreditScoreSection.module.css';

const CreditScoreSection = () => {
  const creditTopRef = useRef(null);
  const creditFeaturesRef = useRef(null);
  const [visibleTop, setVisibleTop] = useState(false);
  const [visibleFeatures, setVisibleFeatures] = useState(false);

  useEffect(() => {
    const options = { threshold: 0.3 };

    const observer1 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleTop(true);
        observer1.disconnect();
      }
    }, options);

    const observer2 = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleFeatures(true);
        observer2.disconnect();
      }
    }, options);

    if (creditTopRef.current) observer1.observe(creditTopRef.current);
    if (creditFeaturesRef.current) observer2.observe(creditFeaturesRef.current);

    return () => {
      observer1.disconnect();
      observer2.disconnect();
    };
  }, []);

  return (
    <section className={styles.creditSection}>
      <div
        ref={creditTopRef}
        className={`${styles.creditTop} ${visibleTop ? styles.fadeUp : ''}`}
      >
        <p className={styles.subtitle}>신용</p>
        <h1 className={styles.title}>
          금융 생활의 첫 걸음,<br />
          신용점수를 미리<br />
          무료로 관리하세요
        </h1>
      </div>

      <div
        ref={creditFeaturesRef}
        className={`${styles.creditFeatures} ${visibleFeatures ? styles.fadeUp : ''}`}
      >
        <div className={styles.featureBox}>
          <img
            src="https://static.toss.im/icons/png/4x/icon-credit-grade-check-2.png"
            alt="신용점수 아이콘"
            className={styles.icon}
          />
          <h3>내 신용점수</h3>
          <p>
            언제 어디서든, 원할 때 간편하게<br />
            KCB, NICE 신용점수를 한 곳에서 확인할 수 있어요.
          </p>
        </div>

        <div className={styles.featureBox}>
          <img
            src="https://static.toss.im/icons/png/4x/icon-credit-grade-up-2.png"
            alt="신용점수 올리기 아이콘"
            className={styles.icon}
          />
          <h3>신용점수 올리기</h3>
          <p>
            통신비, 일반 납부내역 등의 서류를<br />
            토스에서 바로 제출해 신용점수를 올릴 수 있어요.
          </p>
        </div>
      </div>

      <div className={`${styles.creditFeatures} ${visibleFeatures ? styles.fadeUp : ''}`}>
        <div className={styles.featureBox}>
          <img
            src="https://static.toss.im/icons/png/4x/icon-alarm-3.png"
            alt="알림 아이콘"
            className={styles.icon}
          />
          <h3>신용관리 알림</h3>
          <p>
            신용점수에 변동이 생기면 토스가 알람을 보내드려요.<br />
            나의 신용점수가 바뀔 때마다 바로 확인하세요.
          </p>
        </div>

        <div className={styles.featureBox}>
          <img
            src="https://static.toss.im/icons/png/4x/icon-bulb-2.png"
            alt="팁 아이콘"
            className={styles.icon}
          />
          <h3>신용관리 팁</h3>
          <p>
            신용점수 관리가 막막하다면?<br />
            신용관리 팁 콘텐츠를 한 번 읽어보세요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreditScoreSection;
