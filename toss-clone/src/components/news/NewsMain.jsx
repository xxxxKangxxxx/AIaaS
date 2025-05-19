// src/components/NewsList.jsx
import React from 'react';
import styles from './NewsMain.module.css';

const newsItems = [
  { title: '머니라운지 알림 신청서 변경 안내', date: '2025.04.29' },
  { title: '대출신청 이벤트 당첨자 안내', date: '2025.04.29' },
  { title: '토스신용카드 캐시백 혜택 변경 안내', date: '2025.04.28' },
  { title: '[토스] 고객센터 채팅상담 서비스 일시 중단 안내 (4/24)', date: '2025.04.23' },
  { title: '머니라운지 알림 신청서 변경 안내', date: '2025.04.29' },
  { title: '토스증권 시스템 점검으로 인한 토스 계정 통합 서비스 중단 안내', date: '2025.04.22' }
];

const NewsMain = () => {
  return (
    <main className={styles.newsContainer}>
      <h1 className={styles.newsTitle}>공지사항</h1>
      <ul className={styles.newsList}>
        {newsItems.map((item, index) => (
          <li className={styles.newsItem} key={index}>
            <p className={styles.newsHeadline}>{item.title}</p>
            <p className={styles.newsDate}>{item.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default NewsMain;
