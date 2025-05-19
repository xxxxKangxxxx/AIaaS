// src/components/Header.jsx
import React from 'react';
import styles from './NewsHeader.module.css';

const Header = () => {
  React.useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(`.${styles.header}`);
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/">
          <img src="./assets/Toss_Logo_Primary_Reverse.png" alt="Toss Logo" />
        </a>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/about">회사소개</a></li>
          <li><a href="/news">공지사항</a></li>
          <li><a href="/support">고객센터</a></li>
          <li><a href="/support_search">자주 묻는 질문</a></li>
          <li>공동인증서 관리</li>
          <li>채용</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
