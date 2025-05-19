import React, { useEffect, useRef, useState } from 'react';
import styles from './FinanceSection.module.css';

const FinanceSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.financeSection} ${isVisible ? styles.revealed : ''}`}
    >
      <div className={styles.overlay}>
        <h1 className={styles.financeTitle}>꼭 필요했던 금융</h1>
      </div>
    </section>
  );
};

export default FinanceSection;
