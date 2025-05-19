// src/components/home/InvestmentSection.jsx
import React from 'react';
import styles from './InvestmentSection.module.css';

const InvestmentSection = () => {
  return (
    <section className={styles.investmentSection}>
      {/* 상단 중앙 제목 영역 */}
      <div className={styles.headingArea}>
        <p className={styles.label}>투자</p>
        <h2 className={styles.title}>
          투자, <br />
          모두가 할 수 있도록
        </h2>
      </div>

      {/* 가운데: 좌우 텍스트 + 이미지 */}
      <div className={styles.contentWrapper}>
        {/* 왼쪽 설명 */}
        <div className={styles.sideTextGroup}>
          <p className={styles.leftdesc}>
            이해하기 쉬운 용어, <br />
            설명이 필요 없는 <br />
            직관적인 화면 구성
          </p>
        </div>

        {/* 가운데 이미지 */}
        <div className={styles.imageWrapper}>
          <img
            src="https://static.toss.im/assets/homepage/newtossim/invest_screen.png"
            alt="투자 앱 화면"
            className={styles.screenImage}
          />
          <img
            src="https://static.toss.im/assets/homepage/newtossim/iPhone15_Clay_Shadow_03.png"
            alt="폰 프레임"
            className={styles.frameImage}
          />
        </div>

        {/* 오른쪽 설명 */}
        <div className={styles.sideTextGroup}>
          <p className={styles.rightdesc}>
            송금처럼 쉬운 구매 경험 <br />
            그리고 투자 판단에 <br />
            도움을 주는 콘텐츠까지
          </p>
        </div>
      </div>

      {/* 하단 설명 */}
      <div className={styles.bottomText}>
        별도 앱 설치 없이 토스에서 바로, <br />
        토스증권으로 나만의 투자를 시작해 보세요.
      </div>
    </section>
  );
};

export default InvestmentSection;
