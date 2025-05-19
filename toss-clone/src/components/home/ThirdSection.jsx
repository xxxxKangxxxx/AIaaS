import React, { useEffect, useRef, useState } from 'react';
import styles from './ThirdSection.module.css';

const ThirdSection = () => {
  const textRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightTextRef = useRef(null);
  const rightImageRef = useRef(null);

  const [visibleItems, setVisibleItems] = useState({
    text: false,
    leftImage: false,
    rightText: false,
    rightImage: false,
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const key = entry.target.dataset.key;
            setVisibleItems(prev => ({ ...prev, [key]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (textRef.current) observer.observe(textRef.current);
    if (leftImageRef.current) observer.observe(leftImageRef.current);
    if (rightTextRef.current) observer.observe(rightTextRef.current);
    if (rightImageRef.current) observer.observe(rightImageRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.thirdSectionWrapper}>
      <div className={styles.thirdLeftSet}>
        <div
          ref={textRef}
          data-key="text"
          className={`${styles.thirdText} ${visibleItems.text ? styles.fadeUp : ''}`}
        >
          <p className={styles.thirdSubtitle}>홈 · 소비</p>
          <h2>
            내 돈 관리,<br />
            지출부터 일정까지<br />
            똑똑하게
          </h2>
        </div>

        <div
          ref={leftImageRef}
          data-key="leftImage"
          className={`${styles.thirdImageset} ${visibleItems.leftImage ? styles.fadeUp : ''}`}
        >
          <div className={styles.phoneSet}>
            <img
              src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
              alt="phone-frame"
              className={styles.phoneFrame}
            />
            <img
              src="https://static.toss.im/assets/homepage/newtossim/home_screen_2.png"
              alt="phone-screen"
              className={styles.phoneScreen}
            />
          </div>
        </div>
      </div>

      <div className={styles.thirdRightSet}>
        <div
          ref={rightImageRef}
          data-key="rightImage"
          className={`${styles.thirdImageset} ${visibleItems.rightImage ? styles.fadeUp : ''}`}
        >
          <div className={styles.phoneSet}>
            <img
              src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
              alt="phone-frame"
              className={styles.phoneFrame}
            />
            <img
              src="https://static.toss.im/assets/homepage/newtossim/home_screen_1.png"
              alt="phone-screen"
              className={styles.phoneScreen}
            />
          </div>
        </div>

        <div
          ref={rightTextRef}
          data-key="rightText"
          className={`${styles.thirdTextRight} ${visibleItems.rightText ? styles.fadeUp : ''}`}
        >
          <p>
            토스에 계좌와 카드를 연결해 보세요.<br />
            계좌 잔액, 대출, 투자 내역은 기본,<br />
            일자별 소비와 수입까지 한 번에 볼 수 있어요.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
