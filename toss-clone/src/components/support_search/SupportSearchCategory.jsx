// src/components/supportSearch/SupportSearchCategory.jsx
import React from 'react';
import styles from './SupportSearchCategory.module.css';

const categories = [
  '질문 TOP',
  '송금',
  '계좌',
  '카드',
  '토스쇼핑',
  '결제',
  '주식',
  '미성년',
  '이용 문의',
  '안심보상제',
  '대출',
  '토스 프라임',
  '토스 모바일',
  '알림',
  '자료실'
];

const faqs = [
  '🔍 숨은 환급액 찾기 신청을 취소하고 싶어요.',
  '🔍 토스프라임을 해지하고 싶어요.',
  '🔍 토스 비밀번호 어떻게 바꾸나요?',
  '🔍 토스페이 결제 취소 / 환불이 필요해요.',
  '🔍 송금확인증은 어떻게 발급받나요?',
  '🔍 비밀번호를 여러번 틀려서 계정이 잠겼는데요. 어떻게 풀 수 있나요?',
  '🔍 오픈뱅킹 자동이체 문자 받았어요.',
  '🔍 유스카드 결제 건의 환불이 필요해요.',
  '🔍 티몬 결제 취소 방법이 궁금해요.',
  '🔍 위메프 결제 취소하고 싶어요.'
];

const SupportSearchCategory = () => {
  return (
    <section className={styles.categoryContainer}>
      <div className={styles.categoryList}>
        <ul>
          {categories.map((category, idx) => (
            <li key={idx}>
              <button className={`${styles.categoryButton} ${idx === 0 ? styles.active : ''}`}>
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.faqTop}>
        <ul>
          {faqs.map((faq, idx) => (
            <li key={idx}>
              <button className={styles.faqButton}>{faq}</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SupportSearchCategory;
