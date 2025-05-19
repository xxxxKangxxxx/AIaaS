import React from 'react';
import styles from './SupportShieldBox.module.css';

const SupportShieldBox = () => {
  return (
    <section className={styles.shieldBox}>
      <div className={styles.shieldText}>
        <h2>
          토스 안심보상제를<br />
          알려드릴게요
        </h2>
        <p>
          사칭, 보이스피싱 또는 중고거래 피해를 입으셨나요?<br />
          너무 걱정하지 마세요. 토스 안심보상제가 있어요.
        </p>
        <a href="#" className={styles.btnMore}>더 알아보기</a>
      </div>
      <div className={styles.shieldImageWrapper}>
        <img
          src="https://resources-fe.toss.im/image-optimize/width=1080,quality=75/https%3A%2F%2Fstatic.toss.im%2F3d%2Fappcards-shield-two.png"
          alt="보상제 이미지"
          className={styles.shieldImage}
        />
      </div>
    </section>
  );
};

export default SupportShieldBox;
