// src/components/home/MainSection.jsx
import React from 'react';
import styles from './MainSection.module.css';

const MainSection = () => {
  return (
    <>
      <div className={styles.gradientOverlay}></div>
      <section className={styles.mainContent}>
        <h1>
          금융의 모든 것<br />
          토스에서 쉽고 간편하게
        </h1>
        <div className={styles.storeButtons}>
          <a className={styles.storeButton} href="#">
            <img
              src="https://static.toss.im/png-icons/timeline/applekorea.png"
              alt="App Store"
            />
            <span>App Store</span>
          </a>
          <a className={styles.storeButton} href="#">
            <img
              src="https://static.toss.im/png-icons/timeline/googleplay.png"
              alt="Google Play"
            />
            <span>Google Play</span>
          </a>
        </div>
      </section>
    </>
  );
};

export default MainSection;
