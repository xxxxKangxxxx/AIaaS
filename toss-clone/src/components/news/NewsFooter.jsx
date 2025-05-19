import React from 'react';
import styles from './NewsFooter.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.footerLinks}>
          <div className={styles.linkColumn}>
            <h4>서비스</h4>
            <ul>
              <li>공지사항</li>
              <li>자주 묻는 질문</li>
              <li>공동인증서 관리</li>
              <li>계정 일시잠금</li>
              <li>고객센터</li>
              <li>개인(신용)정보 이용·제공</li>
              <li>내역 조회</li>
              <li>브랜드 리소스센터</li>
              <li>토스의 개인정보 보호</li>
              <li>토스유스카드</li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>회사</h4>
            <ul>
              <li>회사 소개</li>
              <li>토스페이먼츠</li>
              <li>토스인슈어런스</li>
              <li>토스증권</li>
              <li>토스씨엑스</li>
              <li>토스뱅크</li>
              <li>토스플레이스</li>
              <li>토스모바일</li>
              <li>토스인컴</li>
              <li>채용</li>
              <li>기술 블로그</li>
              <li>블로그</li>
              <li>공고</li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>문의</h4>
            <ul>
              <li>사업 제휴</li>
              <li>토스쇼핑 입점문의</li>
              <li>광고 문의</li>
              <li>인증 사업 문의</li>
              <li>마케팅·PR</li>
              <li>IR</li>
            </ul>
          </div>

          <div className={styles.linkColumn}>
            <h4>고객센터</h4>
            <ul>
              <li>전화: 1599-4905 (24시간 연중무휴)</li>
              <li>이메일(고객전용): support@toss.im</li>
              <li>이메일(외부기관전용): safe@toss.im</li>
              <li>민원 접수</li>
              <li>민원 접수(비즈니스 고객)</li>
            </ul>
          </div>
        </div>

        <div className={styles.footerCompany}>
          <strong>㈜비바리퍼블리카</strong><br />
          사업자 등록번호 : 120-88-01280 | 대표 : 이승건<br />
          호스팅 서비스 : 주식회사 비바리퍼블리카 | 통신판매업 신고번호 : 2014-서울강남-03377 사업자정보확인<br />
          06236 서울특별시 강남구 테헤란로 142, 4층, 10층, 11층, 12층, 13층, 22층, 23층 (역삼동, 아크플레이스)<br />
          고객센터 : 서울특별시 강남구 테헤란로 133, 9층 (역삼동, 한국타이어빌딩)
        </div>

        <div className={styles.footerPolicies}>
          <div className={styles.policyRow}>
            <a href="#">서비스 이용약관</a>
            <a href="#">개인정보 처리방침</a>
            <a href="#">위치기반서비스 이용약관</a>
            <a href="#">금융소비자보호</a>
          </div>
          <div className={styles.policyRow}>
            <a href="#">통합 금융정보 서비스 약관</a>
            <a href="#">채용팀 개인정보 처리방침</a>
            <a href="#">가맹점 고지사항</a>
            <a href="#">토스비즈니스 개인정보 처리방침</a>
          </div>
          <div className={styles.policyRow}>
            <a href="#">마이데이터 서비스 이용약관</a>
            <a href="#">어드민 서비스 개인정보 처리방침</a>
            <a href="#">토스 전자서명인증업무준칙</a>
          </div>
          <div className={styles.policyRow}>
            <a href="#">이용자의 권리 및 유의사항</a>
            <a href="#">고정형 영상정보처리기기 운영 관리 방침</a>
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
