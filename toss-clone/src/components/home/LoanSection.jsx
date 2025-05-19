import React, { useEffect, useRef, useState } from 'react';
import styles from './LoanSection.module.css';

const LoanSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [visibleLeft, setVisibleLeft] = useState(false);
  const [visibleRight, setVisibleRight] = useState(false);

  useEffect(() => {
    const observerLeft = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleLeft(true);
          observerLeft.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const observerRight = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleRight(true);
          observerRight.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observerLeft.observe(leftRef.current);
    if (rightRef.current) observerRight.observe(rightRef.current);

    return () => {
      observerLeft.disconnect();
      observerRight.disconnect();
    };
  }, []);

  useEffect(() => {
    const screens = document.querySelectorAll(`.${styles.screen}`);
    let currentIndex = 0;

    const showNextScreen = () => {
      const current = screens[currentIndex];
      const nextIndex = (currentIndex + 1) % screens.length;
      const next = screens[nextIndex];

      screens.forEach(screen => {
        screen.classList.remove(styles.active, styles.exitLeft, 'scrollable');
      });

      if (next.dataset.type === 'scroll') {
        next.classList.add(styles.active);
        next.classList.remove('scrollable');
        void next.offsetWidth;
        next.classList.add('scrollable');
      } else {
        next.classList.add(styles.active);
        current.classList.add(styles.exitLeft);
      }

      currentIndex = nextIndex;
    };

    const first = screens[currentIndex];
    if (first.dataset.type === 'scroll') {
      first.classList.add(styles.active);
      first.classList.remove('scrollable');
      void first.offsetWidth;
      first.classList.add('scrollable');
    } else {
      first.classList.add(styles.active);
    }

    const interval = setInterval(showNextScreen, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.loanSection}>
      <div
        ref={leftRef}
        className={`${styles.loanLeft} ${visibleLeft ? styles.fadeUp : ''}`}
      >
        <p className={styles.loanSubtitle}>대출</p>
        <h1>
          여러 은행의 조건을<br />
          1분 만에<br />
          확인해보세요
        </h1>

        <div className={styles.loanUnderTextBox}>
          <h1 className={styles.loanHighlight}>
            한도는 <span className={styles.level1}>높게</span>,<br />
            금리는 <span className={styles.level2}>낮게</span>,<br />
            부담은 <span className={styles.level3}>적게</span>.
          </h1>
        </div>
        <p className={styles.loanUnderText}>
          앉은 자리에서 여러 은행의 한도와 금리를 비교하고<br />
          내게 꼭 맞는 대출을 찾아보세요.<br />
          신용, 비상금, 대환, 주택담보대출 모두 가능해요.
        </p>
      </div>

      <div
        ref={rightRef}
        className={`${styles.loanRight} ${visibleRight ? styles.fadeUp : ''}`}
      >
        <div className={styles.loanPhoneFrame}>
          <img
            src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
            alt="프레임"
            className={styles.frameImg}
          />
          <div className={styles.screenSlider}>
            <img
              src="/assets/screen1.png"
              className={styles.screen}
              data-type="scroll"
              alt="슬라이드1"
            />
            <img
              src="/assets/screen2.png"
              className={styles.screen}
              alt="슬라이드2"
            />
            <img
              src="/assets/screen3.png"
              className={styles.screen}
              alt="슬라이드3"
            />
            <img
              src="/assets/screen4.png"
              className={styles.screen}
              alt="슬라이드4"
            />
            <img
              src="/assets/screen5.png"
              className={styles.screen}
              alt="슬라이드5"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanSection;
