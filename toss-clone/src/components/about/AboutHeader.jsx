// src/components/about/AboutHeader.jsx
import React, { useEffect, useState } from 'react';
import styles from './AboutHeader.module.css';

const AboutHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>
        <a href="/">
          <img src="/assets/Toss_Logo_Primary_Reverse.png" alt="Toss Logo" />
        </a>
      </div>
      <nav>
        <ul className={styles.navList}>
          <li><a href="/about">회사 소개</a></li>
          <li><a href="/news">공지사항</a></li>
          <li><a href="/support">고객센터</a></li>
          <li><a href="/support_search">자주 묻는 질문</a></li>
          <li>토스인증서</li>
          <li>채용</li>
          <li className={styles.langToggle}>
            <span className={styles.activeLang}>KOR</span> | <span className={styles.inactiveLang}>ENG</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AboutHeader;
