// src/pages/Support.jsx
import React, { useEffect } from 'react';
import SupportHeader from '../components/support/SupportHeader';
import SupportHero from '../components/support/SupportHero';
import SupportCallBox from '../components/support/SupportCallBox';
import SupportReportBox from '../components/support/SupportReportBox';
import SupportShieldBox from '../components/support/SupportShieldBox';
import SupportFooter from '../components/support/SupportFooter';

const Support = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SupportHeader />
      <SupportHero />
      <SupportCallBox />
      <SupportReportBox />
      <SupportShieldBox />
      <SupportFooter />
    </>
  );
};

export default Support;
