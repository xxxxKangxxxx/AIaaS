// src/components/support/SupportCallBox.jsx
import React from 'react';
import styles from './SupportCallBox.module.css';

const SupportCallBox = () => {
  return (
    <section className={styles.callBox}>
      <div className={styles.callInfo}>
        <h2>
          토스 고객센터에서
          <br />24시간 상담받을 수 있어요
        </h2>
        <div className={styles.callColumns}>
          <div>
            <p>토스뱅크 관련 문의</p>
            <strong>1661-7654</strong>
          </div>
          <div>
            <p>기타 다른 문의</p>
            <strong>1599-4905</strong>
          </div>
          <div>
            <p>증권·주식 문의</p>
            <strong>1599-7987</strong>
          </div>
          <div>
            <p>모바일·요금제 문의</p>
            <strong>1660-1114</strong>
          </div>
        </div>
      </div>
      <div className={styles.callImageWrapper}>
        <div className={styles.callImageContainer}>
          <img
            src="https://resources-fe.toss.im/image-optimize/width=1080,quality=75/https%3A%2F%2Fstatic.toss.im%2F3d%2Fhand-phone-call-icon.png"
            alt="전화 이미지"
            className={styles.callImage}
          />
        </div>
      </div>
    </section>
  );
};

export default SupportCallBox;
