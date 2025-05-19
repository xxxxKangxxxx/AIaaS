import React from 'react';
import styles from './SupportHeader.module.css';

const SupportHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img
            src="/assets/Toss_Logo_Primary.png"
            alt="Toss Logo"
          />
        </a>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/support_search">자주 묻는 질문</a></li>
          <li><a href="#">피해 사건 신고</a></li>
          <li><a href="#">토스의 보안</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default SupportHeader;
