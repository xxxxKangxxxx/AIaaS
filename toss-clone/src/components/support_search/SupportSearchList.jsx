// src/components/supportSearch/SupportSearchList.jsx

import React from 'react';
import styles from './SupportSearchList.module.css';

const SupportSearchList = () => {
  const pages = [1, 2, 3, 4, 5];
  const currentPage = 1; // 현재 페이지를 임의로 설정 (향후 props나 state로 관리 가능)

  return (
    <section className={styles.faqList}>
      <div className={styles.pagination}>
        {pages.map((page) => (
          <button
            key={page}
            className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
          >
            {page}
          </button>
        ))}
        <button className={styles.pageButton}>›</button>
      </div>
    </section>
  );
};

export default SupportSearchList;
