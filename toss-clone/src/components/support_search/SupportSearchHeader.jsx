// src/components/support_search/SupportSearchHeader.jsx
import React, { useEffect, useState } from 'react';
import styles from './SupportSearchHeader.module.css';

const SupportSearchHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트 언마운트 시 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="/">
          <img
            src="/assets/Toss_Logo_Primary.png"
            alt="고객센터 로고"
            className={styles.logo}
          />
        </a>
        <nav className={styles.nav}>
          <a href="#">자주 묻는 질문</a>
          <a href="#">피해 사건 신고</a>
          <a href="#">토스의 보안</a>
        </nav>
      </div>
    </header>
  );
};

export default SupportSearchHeader;
