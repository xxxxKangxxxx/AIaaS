import React from 'react';
import styles from './SupportHero.module.css';
import { useNavigate } from 'react-router-dom';

const SupportHero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <img
        src="https://resources-fe.toss.im/image-optimize/width=256,quality=75/https%3A%2F%2Fstatic.toss.im%2F3d%2Fcustomer-service-area-apng.png"
        alt="도움 아이콘"
        className={styles.heroIcon}
      />
      <h1 className={styles.heroTitle}>
        무엇을 도와드릴까요?</h1>
      <div
        className={styles.searchBox}
        onClick={() => navigate('/support_search')}
        style={{ cursor: 'pointer' }}
      >
        <input
          type="text"
          placeholder="궁금한 점을 검색해보세요."
          readOnly
        />
      </div>
      <div className={styles.tagList}>
        <button>잘못 송금했어요</button>
        <button>송금 확인증</button>
        <button>각종 증명서 발급</button>
        <button>토스뱅크 증빙자료</button>
        <button>카드 분실 · 재발급</button>
        <button>미성년</button>
      </div>
    </section>
  );
};

export default SupportHero;
