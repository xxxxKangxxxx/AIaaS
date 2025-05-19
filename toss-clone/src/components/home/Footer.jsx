// src/components/home/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerCompany}>
          <strong>㈜비바리퍼블리카</strong><br />
          사업자 등록번호 : 120-88-01280 | 대표 : 이승건<br />
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 : 2014-서울강남-03377 사업자정보확인<br />
          06236 서울특별시 강남구 테헤란로 142, 4층~23층 (역삼동, 아크플레이스)<br />
          고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (한국타이어빌딩)
        </div>

        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <a href="#">서비스 이용약관</a>
            <a href="#">개인정보 처리방침</a>
            <a href="#">위치기반서비스 이용약관</a>
            <a href="#">금융소비자보호</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="#">통합 금융정보 서비스 약관</a>
            <a href="#">채용팀 개인정보 처리방침</a>
            <a href="#">가맹점 고지사항</a>
            <a href="#">토스비즈니스 개인정보 처리방침</a>
          </div>
          <div className={styles.linkColumn}>
            <a href="#">마이데이터 서비스 이용약관</a>
            <a href="#">어드민 개인정보처리방침</a>
            <a href="#">토스 전자인증업무준칙</a>
            <a href="#">토스 전자인증서비스 약관</a>
          </div>
        </div>

        <div className={styles.footerIcons}>
          <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-blog.svg" alt="Blog" /></a>
          <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-naver.svg" alt="Naver" /></a>
          <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-twitter.svg" alt="Twitter" /></a>
          <a href="#"><img src="https://static.toss.im/assets/homepage/safety/icn-instagram.svg" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;