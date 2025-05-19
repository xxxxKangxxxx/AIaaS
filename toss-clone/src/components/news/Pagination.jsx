// src/components/Pagination.jsx
import React from 'react';
import styles from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <a className={styles.arrow}>&#x2039;</a>
      <a className={`${styles.page} ${styles.active}`}>1</a>
      <a className={styles.page}>2</a>
      <a className={styles.page}>3</a>
      <a className={styles.page}>4</a>
      <a className={styles.page}>5</a>
      <span className={styles.ellipsis}>...</span>
      <a className={styles.page}>31</a>
      <a className={styles.arrow}>&#x203A;</a>
    </div>
  );
};

export default Pagination;
